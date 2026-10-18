export interface WritingEntry {
  title: string;
  /** ISO date, e.g. "2025-06-14". Sorted newest first. */
  date: string;
  /** Absolute URL. Blog posts usually live on GitHub, Substack, or Medium. */
  url: string;
  /** One line. What will the reader get out of it? */
  blurb: string;
  /** "Article" | "Note" | "Talk". Shown as a small label. */
  kind?: string;
}

/**
 * Writing is the cheapest differentiator in a CS portfolio: it shows you can
 * explain your thinking, which is exactly what an interview is testing.
 *
 * This array is intentionally empty. The Writing section hides itself until
 * you add an entry, so the site looks finished in the meantime.
 */
export const writing: WritingEntry[] = [];

/** Newest first, only the three most recent. */
export function recentWriting(limit = 3): WritingEntry[] {
  return [...writing].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}
