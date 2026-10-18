/**
 * Site-wide identity and metadata.
 * Edit everything in this file to change who the site says you are.
 */

export const site = {
  /** Canonical origin. Must include protocol. Used for sitemap + canonical URLs. */
  url: "https://ltthanh.dev",

  /** Your name, as it should appear in the header wordmark. */
  name: "Lê Thái Thành",

  /** Shown in the footer console.errorand on the resume page. */
  fullName: "Lê Thái Thành",

  /** One sentence. Be specific about what you build, not what you "love". */
  tagline: "CS/AI major finding his own paths",

  /** Short label for the meta description and OG tags. Keep under ~60 chars. */
  metaDescription:
    "Portfolio of a computer science student — projects, experience, and writing.",

  /** Degree line shown under the name on the home page. */
  degree: "CS26 @ University of Information Technology - VNUHCM",

  /** Graduation year, used on the resume page. */
  graduationYear: 2030,

  /** Primary contact address. The contact form is a prefilled mailto: link. */
  email: "lt.thanh1008@gmail.com",

  /** Where the mailto: link points. Shown next to the email. */
  emailSubject: "Hello",

  /**
   * File inside /public to link as the résumé download.
   * Until this file exists, the download button renders as a disabled
   * "PDF coming soon" state instead of a 404.
   */
  resumeFile: "resume.pdf",
  resumeLabel: "Résumé",

  socials: [
    { label: "GitHub", href: "https://www.github.com/tThanh-24", handle: "@tThanh-24" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tthanh24/", handle: "Thái Thành Lê" },
    { label: "Email", href: "mailto:lt.thanh1008@gmail.com", handle: "lt.thanh1008@gmail.com" },
  ],

  /**
   * Three short phrases the hero typewriter cycles through.
   * Keep each under ~30 characters so the line does not wrap.
   */
  rotatingRoles: [
    "Nothing",
  ],

  locale: "en_US",
  themeColorLight: "#fafaf9",
  themeColorDark: "#0b0b0c",
} as const;

export type Site = typeof site;
