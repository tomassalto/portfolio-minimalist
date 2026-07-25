import { featuredProjects, repoOverrides } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { defaultLang, type Language } from "@/i18n/ui";
import type {
  FeaturedProjectConfig,
  GitHubRepoMetadata,
  PortfolioProject,
  ProjectCategory,
} from "@/types";

type GitHubRepoResponse = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  created_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

const API_BASE = "https://api.github.com";
const GITHUB_VERSION = "2022-11-28";

let repositoriesPromise: Promise<GitHubRepoMetadata[]> | undefined;

function getHeaders(extra?: HeadersInit): HeadersInit {
  const token = import.meta.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": GITHUB_VERSION,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  };
}

async function githubRequest(path: string, headers?: HeadersInit) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: getHeaders(headers),
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${path}: ${response.status}`);
  }

  return response;
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/^---[\s\S]*?---/m, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_>#~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSummary(readme: string | null, fallback: string) {
  if (!readme) {
    return fallback;
  }

  const plain = stripMarkdown(readme);
  if (!plain) {
    return fallback;
  }

  const firstSentence = plain.match(/(.{80,260}?[.!?])(\s|$)/)?.[1] ?? plain;
  return firstSentence.slice(0, 280).trim();
}

function normalizeUrl(url: string | null | undefined) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function uniqueValues(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function categorySet(values: ProjectCategory[]) {
  return [...new Set(values)];
}

function inferCategories(repo: GitHubRepoMetadata): ProjectCategory[] {
  const source = [repo.language, ...repo.topics, repo.name].join(" ").toLowerCase();
  const categories: ProjectCategory[] = [];

  if (source.includes("react")) categories.push("react");
  if (source.includes("laravel")) categories.push("laravel");
  if (source.includes("php")) categories.push("php");
  if (
    source.includes("javascript") ||
    source.includes("typescript") ||
    source.includes("node") ||
    source.includes("react") ||
    source.includes("astro")
  ) {
    categories.push("javascript-typescript");
  }
  if (source.includes("astro")) categories.push("astro");
  if (
    (categories.includes("react") || categories.includes("astro")) &&
    (categories.includes("laravel") || categories.includes("php"))
  ) {
    categories.push("full-stack");
  }

  return categorySet(categories);
}

function inferTechnologies(
  repo: GitHubRepoMetadata,
  config?: Partial<FeaturedProjectConfig>,
) {
  const tech = new Set<string>(config?.technologies ?? []);
  const source = [repo.language, ...repo.topics, repo.name].join(" ").toLowerCase();

  const mappings = [
    ["react", "React"],
    ["laravel", "Laravel"],
    ["php", "PHP"],
    ["astro", "Astro"],
    ["typescript", "TypeScript"],
    ["javascript", "JavaScript"],
    ["mysql", "MySQL"],
    ["tailwind", "Tailwind CSS"],
    ["svelte", "Svelte"],
    ["node", "Node.js"],
    ["cli", "CLI"],
    ["git", "Git"],
  ] as const;

  if (repo.language) {
    tech.add(repo.language);
  }

  for (const [needle, label] of mappings) {
    if (source.includes(needle)) {
      tech.add(label);
    }
  }

  return uniqueValues([...tech]);
}

async function fetchReadme(repoFullName: string) {
  const response = await githubRequest(`/repos/${repoFullName}/readme`, {
    Accept: "application/vnd.github.raw+json",
  });

  if (!response) {
    return null;
  }

  return response.text();
}

async function fetchRepositories() {
  const response = await githubRequest(
    `/users/${siteConfig.repoOwner}/repos?per_page=100&sort=created&type=owner`,
  );

  if (!response) {
    return [];
  }

  const repos = (await response.json()) as GitHubRepoResponse[];

  const visibleRepos = repos.filter(
    (repo) =>
      !repo.fork &&
      !repo.archived &&
      repo.name.toLowerCase() !== siteConfig.repoOwner.toLowerCase(),
  );

  return Promise.all(
    visibleRepos.map(async (repo) => ({
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      htmlUrl: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      topics: repo.topics ?? [],
      createdAt: repo.created_at,
      updatedAt: repo.pushed_at,
      readme: await fetchReadme(repo.full_name),
    })),
  );
}

function fallbackRepositories(): GitHubRepoMetadata[] {
  return featuredProjects.map((project) => ({
    name: project.repo,
    fullName: `${siteConfig.repoOwner}/${project.repo}`,
    description: project.descriptionOverride?.[defaultLang] ?? null,
    htmlUrl: `${siteConfig.githubUrl}/${project.repo}`,
    homepage: project.demoUrl ?? null,
    language: project.technologies?.[0] ?? null,
    topics: project.technologies?.map((item) => item.toLowerCase()) ?? [],
    createdAt: null,
    updatedAt: null,
    readme: project.summaryOverride?.[defaultLang] ?? null,
  }));
}

function buildProject(
  repo: GitHubRepoMetadata,
  lang: Language,
  config?: FeaturedProjectConfig,
): PortfolioProject {
  const fallbackDescription =
    repo.description ??
    `Repository maintained by ${siteConfig.name} focused on practical web development.`;
  const readmeSummary = extractSummary(repo.readme, fallbackDescription);
  const repoOverride = repoOverrides[repo.name];
  const categories = categorySet(
    config?.categories ?? repoOverride?.categories ?? inferCategories(repo),
  );
  const technologies = inferTechnologies(repo, {
    ...config,
    technologies: repoOverride?.technologies ?? config?.technologies,
  });

  return {
    repo: repo.name,
    name: config?.nameOverride ?? repo.name,
    description: config?.descriptionOverride?.[lang] ?? repo.description ?? readmeSummary,
    technologies,
    githubUrl: repo.htmlUrl,
    deployUrl: normalizeUrl(config?.demoUrl ?? repoOverride?.demoUrl ?? repo.homepage),
    createdAt: repo.createdAt,
    updatedAt: repo.updatedAt,
    summary: config?.summaryOverride?.[lang] ?? readmeSummary,
    categories,
    featured: config?.featured ?? false,
    featuredOrder: config ? config.order : null,
    image: config?.image ?? null,
  };
}

export async function getPortfolioProjects(lang: Language = defaultLang) {
  if (!repositoriesPromise) {
    repositoriesPromise = fetchRepositories().catch(() => fallbackRepositories());
  }

  const repositories = await repositoriesPromise;
  const featuredMap = new Map(
    featuredProjects.map((project) => [project.repo, project]),
  );

  return repositories
    .map((repo) => buildProject(repo, lang, featuredMap.get(repo.name)))
    .sort((a, b) => {
      const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bTime - aTime;
    });
}
