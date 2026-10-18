export interface ExperienceEntry {
  role: string;
  org: string;
  /** Display string, e.g. "Summer 2025" or "Jun 2025 – Aug 2025". */
  period: string;
  /** Where — city or "Remote". */
  location?: string;
  /** 2-4 bullets. Lead with what you did and the number it moved. */
  points: string[];
  links?: { href: string; label: string }[];
  /** Coursework counts. Set true for relevant classes. */
  coursework?: boolean;
}

/** Most recent first. */
export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    period: "Summer 2025",
    location: "City, ST",
    points: [
      "Built X that did Y, measured as Z.",
      "Reduced A by 40% by rewriting B in C.",
      "Owned the migration of N services with zero downtime.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Lab or Lab Name, University",
    period: "Jan 2025 – Present",
    points: [
      "Reproduced and extended a paper on X, improving Y by 12%.",
      "Maintained the lab's data pipeline over 1.2M records.",
    ],
    coursework: true,
  },
  {
    role: "Teaching Assistant",
    org: "Course Name, University",
    period: "Fall 2024",
    points: [
      "Ran weekly office hours for 120 students.",
      "Wrote the autograder used for all problem sets.",
    ],
    coursework: true,
  },
];
