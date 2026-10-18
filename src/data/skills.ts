/**
 * Skills, grouped so the resume page can lay them out without hardcoding.
 * List only what you would be comfortable being interviewed on — a short
 * honest list reads better to a reviewer than a long padded one.
 */
export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "TypeScript", "Rust", "SQL", "Go"],
  },
  {
    label: "Systems",
    items: ["Linux", "Docker", "Git", "REST APIs", "Concurrency", "Profiling"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Redis", "Pandas", "Spark", "SQLite"],
  },
  {
    label: "Frontend",
    items: ["React", "Astro", "Tailwind", "TypeScript"],
  },
];

/** "Python, C++, Rust, …" — used in the footer and meta description. */
export const skillsFlat: string = skillGroups
  .flatMap((g) => g.items)
  .join(", ");
