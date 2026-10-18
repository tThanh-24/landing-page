export interface ProjectMetric {
  /** The number, written the way a recruiter reads it. e.g. "1.2M", "3x", "12ms". */
  value: string;
  /** What the number measures. Keep to a few words. */
  label: string;
}

export interface Project {
  /** Short name. The strongest signal on the card. */
  title: string;
  /** Optional longer name if the short one is cryptic. */
  subtitle?: string;
  /** One sentence: what it does and why it exists. No marketing adjectives. */
  blurb: string;
  /** ISO-ish year, or year range. Used for ordering. */
  year: string;
  /** 2-4 items. Lowercase, no "#". */
  tags: string[];
  links: {
    repo?: string;
    demo?: string;
    writeup?: string;
  };
  /** Show on the home page. Aim for 2-3. */
  featured: boolean;
  /** Optional screenshot at 2:1 or 16:9. Put the file in /public/projects/. */
  image?: string;
  /** Quantified outcomes. This is what makes a project land with a recruiter. */
  metrics?: ProjectMetric[];
}

/**
 * Projects, newest first.
 *
 * The `metrics` field is the highest-leverage thing on this site: a number
 * ("1.2M rows processed", "3x faster than baseline") tells a reviewer you
 * measured your work. Add one to each project you can.
 */
export const projects: Project[] = [
  {
    title: "Your Flagship Project",
    subtitle: "optional longer name",
    blurb:
      "One sentence describing what this is and what problem it solves. Replace this with the real thing.",
    year: "2025",
    tags: ["python", "postgres", "docker"],
    links: { repo: "https://github.com/your-username/your-project" },
    featured: true,
    metrics: [
      { value: "—", label: "replace me" },
      { value: "—", label: "replace me" },
    ],
  },
  {
    title: "Second Project",
    blurb: "Something with a different flavor than the first — a systems project, a tool, a dataset.",
    year: "2024",
    tags: ["rust", "wasm"],
    links: { repo: "https://github.com/your-username/another-project" },
    featured: true,
  },
  {
    title: "Third Project",
    blurb: "Coursework, a hackathon win, or a small tool that saved you time. Small is fine.",
    year: "2024",
    tags: ["typescript", "react"],
    links: { repo: "https://github.com/your-username/third-project" },
    featured: false,
  },
];

/** Projects that appear on the home page. Falls back to all if none are flagged. */
export function featuredProjects(): Project[] {
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects;
}
