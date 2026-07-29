export type CaseStudy = {
  slug: string;
  title: string;
  categories: string[];
  problem: string;
  approach: string;
  outcome: string;
  skills: string[];
  featured?: boolean;
  externalUrl?: string;
  /** Shorter excerpt for the card tile, when the full problem statement is too long. */
  cardExcerpt?: string;
  /** Real product screenshot, when available. Falls back to a generated cover otherwise. */
  coverImage?: string;
  coverImageAlt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-marketing-reporting-copilot",
    title: "AI Marketing Insights",
    categories: ["Client Work", "AI", "Marketing Analytics", "E-Commerce"],
    problem:
      "Marketing campaign and landing page data existed in separate systems with no reliable way to connect them, to help understand how campaign traffic behaved after arriving on the website. Weekly reporting relied on incomplete information and couldn't answer key performance questions.",
    cardExcerpt:
      "Marketing campaign and landing page data existed in separate systems with no reliable way to connect them, to help understand how campaign traffic behaved after arriving on the website.",
    approach:
      "Designed and built an automated Python workflow that linked Google Analytics landing page engagement with Meta campaign performance by reconciling inconsistent campaign structures. The resulting dataset was then analyzed using AI to generate executive-ready marketing insights.",
    outcome:
      "Created a new reporting capability that enabled richer performance analysis, improved insight quality, reduced manual reporting, and supported faster, more informed marketing decisions.",
    skills: [
      "Marketing Analytics",
      "AI",
      "Python",
      "Claude API",
      "Automation",
      "Product Design",
    ],
    featured: true,
    coverImage: "/case-studies/ai-marketing-reporting-copilot.png",
    coverImageAlt:
      "Weekly campaign analysis report showing a landing page insights table broken out by channel (Meta, TikTok, Google PMax) with impressions, clicks, top page, and engagement",
  },
  {
    slug: "telehealth-growth",
    title: "From Zero to 3× Growth",
    categories: ["Client Work", "Startup", "Healthcare"],
    problem:
      "A telehealth startup needed to build customer acquisition from scratch while supporting aggressive growth goals.",
    approach:
      "Built the digital marketing foundation, launched acquisition programs, and established measurement systems for rapid experimentation and iteration.",
    outcome: "Enabled three consecutive quarters of 3× growth.",
    skills: ["Startup Growth", "Acquisition", "Analytics", "Go-to-Market"],
    featured: true,
    coverImage: "/case-studies/telehealth-growth.png",
    coverImageAlt:
      "Project setup checklist showing completed foundational tasks alongside a quarterly growth dashboard widget with three bars in exact 1:3:9 proportions across Q1, Q2, and Q3",
  },
  {
    slug: "baby-brand-growth",
    title: "Scaling Growth for a Baby Brand",
    categories: ["Client Work", "Growth Strategy", "E-Commerce", "Baby Products"],
    problem:
      "Rapid growth across marketing channels and product lines made performance increasingly complex to measure, optimize, and scale efficiently.",
    approach:
      "Optimized acquisition across the full funnel, introduced incrementality testing, expanded into new product categories, and built annual and quarterly forecasting models.",
    outcome:
      "Created a stronger measurement framework that supported more efficient and sustainable growth.",
    skills: [
      "Growth Strategy",
      "Incrementality",
      "Forecasting",
      "Paid Media",
    ],
    featured: true,
    coverImage: "/case-studies/baby-brand-growth.png",
    coverImageAlt:
      "Kanban-style project board tracking TikTok, Reddit, paid search, and new product launch across Test, Optimize, and Scale columns",
  },
  {
    slug: "groundwork",
    title: "Groundwork",
    categories: ["Sandbox", "AI", "Education"],
    problem:
      "Families looking for summer educational opportunities often struggle to find the right programs, evaluate pros/cons across dozens of factors and make confident decisions.",
    approach:
      "Designed and built an AI-assisted product that transforms scattered program information into a structured decision-making experience.",
    outcome:
      "Created a solution that makes educational program discovery faster, more transparent, and easier to navigate.",
    skills: ["Product Strategy", "UX", "AI", "Education"],
    externalUrl: "https://groundwork-omega-flax.vercel.app/",
    coverImage: "/product-sandbox/groundwork.png",
    coverImageAlt:
      "Groundwork summer programs explorer with filters and program comparison cards",
  },
  {
    slug: "marketing-forecasting-framework",
    title: "Marketing Forecasting Framework",
    categories: ["Client Work", "Analytics", "Healthcare"],
    problem:
      "Long appointment lead times made it difficult to translate marketing performance into reliable business forecasts.",
    approach:
      "Developed a forecasting model connecting channel-level marketing activity to downstream business outcomes, enabling much more granular planning.",
    outcome:
      "Provided leadership with a practical framework for forecasting growth and making more informed marketing investment decisions.",
    skills: ["Forecasting", "Analytics", "Measurement", "Executive Strategy"],
    featured: true,
    coverImage: "/case-studies/marketing-forecasting-framework.png",
    coverImageAlt:
      "Spreadsheet screenshot of the appointment forecast model with monthly rows and channel contribution columns",
  },
  {
    slug: "spellquest",
    title: "SpellQuest",
    categories: ["Sandbox", "AI", "Education"],
    problem:
      "Learning French spelling requires mastering interconnected grammar rules that are rarely taught systematically and are often frustrating to practice.",
    approach:
      "Designed and built an interactive learning application using AI-assisted development, progressive discovery, gamification, and immediate feedback.",
    outcome:
      "Created a fully functional learning platform that makes mastering French spelling more engaging and intuitive.",
    skills: [
      "Product Design",
      "AI",
      "Education",
      "UX",
      "Prompt Engineering",
    ],
    externalUrl: "https://spellquest-french.ai.studio/",
    coverImage: "/product-sandbox/spellquest.png",
    coverImageAlt:
      "SpellQuest French grammar learning app with gamified repair spell interface",
  },
  {
    slug: "interim-executive-leadership",
    title: "Interim Executive Leadership",
    categories: ["Leadership", "E-Commerce"],
    problem:
      "Companies needed experienced executive marketing leadership during critical transition periods (maternity leave) without losing momentum.",
    approach:
      "Stepped into VP and Head of Growth roles, leading teams, strengthening reporting, guiding channel strategy, improving forecasting, and supporting executive decision-making.",
    outcome:
      "Maintained business continuity while leaving behind stronger measurement, planning, and operating processes.",
    coverImage: "/case-studies/interim-executive-leadership.png",
    coverImageAlt:
      "Internal team tool showing a growth team org chart alongside a demand forecast widget and weekly leadership cadence",
    skills: [
      "Executive Leadership",
      "Team Management",
      "CRM",
      "Forecasting",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
