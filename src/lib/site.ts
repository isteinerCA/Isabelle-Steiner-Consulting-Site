export const site = {
  name: "Isabelle Steiner",
  title: "Growth & Strategy Advisor",
  tagline: "Helping companies build, scale, and optimize growth.",
  domain: "isabellesteiner.com",
  contactEmail: "isabelle@isabelles.net",
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
      "Improving measurement, forecasting, experimentation and performance.",
  },
  {
    title: "Invent",
    audience: "Using AI",
    description:
      "Exploring AI-powered tools, workflows and educational products.",
  },
] as const;

export const heroIntro = [
  "I help companies solve growth and strategy challenges through marketing, analytics, forecasting, and increasingly, practical applications of AI.",
  "20+ years helping companies grow, from launching marketing channels at Walmart.com to leading retention at Shutterfly and advising more than 30 companies as an independent consultant.",
];

export const featuredWorkIntro =
  "These featured projects span marketing, healthcare, retail, education, and more, but they all reflect the same mindset: combining strategy, analytics, and technology to turn complex problems into practical, measurable solutions.";

export const aboutContent = {
  intro: [
    "I've spent my career helping companies solve growth and strategy challenges, from launching marketing channels at Walmart to leading retention at Shutterfly and, over the past decade as a consultant, advising more than 30 companies across industries and growth stages. Seeing so many different businesses has given me a broad perspective and exposed me to a wide variety of challenges and solutions.",
    "Most of my work has focused on marketing strategy, forecasting, analytics, and building high-performing teams. More recently, I've been applying the same approach to designing AI-powered tools that help people work smarter or learn more effectively.",
  ],
};

export const productSandboxProjects = [
  {
    title: "SpellQuest",
    slug: "spellquest",
    url: "https://spellquest-french.ai.studio/",
    image: "/product-sandbox/spellquest.png",
    imageAlt: "SpellQuest French grammar learning app with gamified repair spell interface",
    summary:
      "An interactive learning application that teaches French spelling through progressive discovery, gamification, and immediate feedback.",
    learned:
      "Building educational software requires balancing pedagogy, motivation, and interface design. AI dramatically accelerated prototyping while allowing rapid iteration based on usability observations.",
  },
  {
    title: "Groundwork",
    slug: "groundwork",
    url: "https://groundwork-omega-flax.vercel.app/",
    image: "/product-sandbox/groundwork.png",
    imageAlt: "Groundwork summer programs explorer with filters and program comparison cards",
    summary:
      "An AI-assisted prototype that organizes educational options into a structured decision-making experience rather than a traditional directory.",
    learned:
      "AI isn't a substitute for good data—it is an accelerator for it. By using AI to improve the accuracy, consistency, and structure of information, the resulting product became far more reliable and useful.",
  },
] as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/product-sandbox", label: "Sandbox" },
] as const;

export function contactMailto(subject = "Consulting inquiry") {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
