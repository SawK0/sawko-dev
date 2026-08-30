export type ProjectStatus = "live" | "in-progress" | "planned";

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
};

// Ordered by priority — this order is also the display order.
export const projects: Project[] = [
  {
    slug: "unoverse",
    name: "Unoverse",
    description:
      "Real-time multiplayer Uno platform with live gameplay, matchmaking, and leaderboards across web and mobile.",
    tech: ["NestJS", "Angular", "Flutter", "PostgreSQL", "Redis", "WebSockets"],
    github: "https://github.com/SawK0/unoverse",
    status: "in-progress", // TODO: flip to "live" + add demo link once deployed and made public
  },
  {
    slug: "rambloo-v2",
    name: "Rambloo",
    description:
      "Multi-author blog platform rewrite with a headless CMS, OAuth, moderated comments, and bilingual SEO.",
    tech: ["Next.js", "Sanity", "Supabase", "NextAuth"],
    github: "https://github.com/SawK0/rambloo-v2",
    demo: "https://rambloo.com", // NOTE: this currently runs the OLD Django+Angular stack, not this rewrite — see caveat below
    status: "in-progress", // TODO: flip to "live" once the rewrite is what's actually deployed at this domain
  },
  {
    slug: "learn-pwo-karen-web",
    name: "Learn Pwo Karen",
    description:
      "Educational platform for learning the Pwo Karen language, built to support digital preservation of a minority language.",
    tech: ["Django REST Framework", "Angular", "PostgreSQL", "Docker"],
    github: "https://github.com/SawK0/learn-pwo-karen-web",
    status: "in-progress", // TODO: add demo link once deployed
  },
  {
    slug: "resturant-management",
    name: "Restaurant Ordering",
    description:
      "QR-code table ordering system with live order status streamed to customers and staff over WebSockets.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis"],
    status: "planned", // TODO: add github/demo once the rebuilt version exists
  },
  {
    slug: "minifxapp",
    name: "minFX",
    description:
      "A collection of small developer utilities that run entirely client-side, fast, private, no data leaves the browser.",
    tech: ["Angular", "TypeScript", "SCSS"],
    github: "https://github.com/SawK0/minifxapp",
    demo: "https://minifxapp.vercel.app",
    status: "live",
  },
  {
    slug: "drive-test-prep",
    name: "Drive Test Prep",
    description:
      "Practice quiz app for driving theory tests, category-based practice and full mock tests.",
    tech: ["Next.js", "TypeScript"],
    demo: "https://drive-test-prep.vercel.app/",
    status: "live", // NOTE: code lives on GitLab, not GitHub — no `github` link set here, add one if that repo is public
  },
];
