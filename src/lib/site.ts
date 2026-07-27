export const site = {
  name: "Isabelle Steiner",
  title: "Growth & Strategy Advisor",
  tagline: "Helping companies build, scale, and optimize growth.",
  domain: "isabellesteiner.com",
  /** Update when you set up your inbox */
  contactEmail: "hello@isabellesteiner.com",
  linkedInUrl: "https://www.linkedin.com/in/isabelle-steiner-26b3522/",
  description:
    "Senior Growth & Strategy Advisor combining executive marketing experience with AI-enabled problem solving and rapid product prototyping.",
} as const;

export const pillars = [
  {
    title: "Build",
    audience: "For startups",
    description:
      "Building marketing organizations, measurement, and acquisition.",
  },
  {
    title: "Optimize",
    audience: "For growing companies",
    description:
      "Forecasting, analytics, experimentation, and scaling.",
  },
  {
    title: "Invent",
    audience: "Using AI",
    description:
      "Rapid prototypes, workflow automation, and new product ideas.",
  },
] as const;

export const credibilityLine =
  "20+ years leading growth for Walmart, Tiny Prints, Shutterfly, and high-growth startups.";

export const todayLine =
  "Today I advise companies on marketing strategy, analytics, forecasting, and AI-enabled solutions.";

export const featuredWorkIntro =
  "These projects span marketing, healthcare, retail, education, and more, but they all reflect the same mindset: combining strategy, analytics, and technology to turn complex problems into practical, measurable solutions.";

export const aboutContent = {
  intro: [
    "I've spent my career helping companies grow—from launching marketing channels at Walmart to scaling Tiny Prints, leading retention at Shutterfly, and advising startups as an independent consultant.",
    "What I enjoy most is solving complex business problems.",
    "Sometimes that means improving marketing strategy. Sometimes it means building better forecasting models. Increasingly, it means designing AI-powered tools that help people work smarter or learn more effectively.",
  ],
};

export const productLabProjects = [
  {
    title: "SpellQuest",
    url: "https://spellquest-french.ai.studio/",
    summary:
      "An interactive learning application that teaches French spelling through progressive discovery, gamification, and immediate feedback.",
    learned:
      "Building educational software requires balancing pedagogy, motivation, and interface design. AI dramatically accelerated prototyping while allowing rapid iteration based on usability observations.",
  },
  {
    title: "Groundwork",
    url: "https://groundwork-omega-flax.vercel.app/",
    summary:
      "An AI-assisted prototype that organizes educational options into a structured decision-making experience rather than a traditional directory.",
    learned:
      "AI isn't a substitute for good data—it is an accelerator for it. By using AI to improve the accuracy, consistency, and structure of information, the resulting product became far more reliable and useful.",
  },
] as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/product-lab", label: "Product Lab" },
] as const;

export function contactMailto(subject = "Consulting inquiry") {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
