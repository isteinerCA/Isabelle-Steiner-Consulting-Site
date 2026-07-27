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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-marketing-reporting-copilot",
    title: "AI Marketing Reporting Copilot",
    categories: ["Client Work", "AI", "Marketing Analytics", "E-Commerce"],
    problem:
      "Marketing performance data lived across Google Analytics and Meta. Weekly reporting required manual exports, spreadsheet merges, and hours of analysis before insights could be shared with leadership.",
    approach:
      "Built an automated workflow in Python that reconciles campaign structures across platforms, combines performance data into a single report, and uses an LLM to generate executive-ready weekly insights tailored to the client's marketing goals.",
    outcome:
      "Reduced manual reporting, created a reusable reporting pipeline, and enabled faster, more consistent decision-making.",
    skills: [
      "Marketing Analytics",
      "AI",
      "Python",
      "Claude API",
      "Automation",
      "Product Design",
    ],
    featured: true,
  },
  {
    slug: "marketing-forecasting-framework",
    title: "Marketing Forecasting Framework",
    categories: ["Client Work", "Analytics", "Healthcare"],
    problem:
      "Leadership lacked a reliable way to translate marketing performance into patient exam forecasts.",
    approach:
      "Developed a forecasting model connecting channel-level marketing activity to downstream business outcomes, enabling planning at a much more granular level.",
    outcome:
      "Improved visibility into growth opportunities and provided a framework for more informed marketing investment decisions.",
    skills: ["Forecasting", "Analytics", "Measurement", "Executive Strategy"],
    featured: true,
  },
  {
    slug: "baby-brand-growth",
    title: "Scaling Growth for a Baby Brand",
    categories: ["Client Work", "Growth Strategy", "E-Commerce", "Baby Products"],
    problem:
      "A rapidly growing consumer brand needed to expand marketing while maintaining efficiency across an increasingly complex portfolio.",
    approach:
      "Optimized acquisition across the full funnel, introduced incrementality testing, supported expansion into new product categories, and built forecasting models for annual and quarterly planning.",
    outcome:
      "Established a more rigorous measurement framework and supported sustainable growth across marketing investments.",
    skills: [
      "Growth Strategy",
      "Incrementality",
      "Forecasting",
      "Paid Media",
    ],
    featured: true,
  },
  {
    slug: "spellquest",
    title: "SpellQuest",
    categories: ["Product Lab", "Education"],
    problem:
      "Learning French spelling requires mastering grammatical rules that are complex, interconnected, and rarely taught systematically. Practicing these rules is often repetitive and frustrating. I set out to create a more engaging and structured way to learn them.",
    approach:
      "Designed and built an interactive learning application using AI-assisted development that teaches spelling through progressive discovery, gamification, and immediate feedback.",
    outcome:
      "Created a fully functional website that allows learners to master French grammar rules in a fun and motivating environment.",
    skills: [
      "Product Design",
      "AI",
      "Education",
      "UX",
      "Prompt Engineering",
    ],
    externalUrl: "https://spellquest-french.ai.studio/",
  },
  {
    slug: "groundwork",
    title: "Groundwork",
    categories: ["Product Lab", "Education"],
    problem:
      "Families researching educational opportunities often struggle to compare programs across many dimensions and make informed decisions.",
    approach:
      "Designed and built an AI-assisted prototype that organizes educational options into a structured decision-making experience rather than a traditional directory.",
    outcome:
      "Launched online tool to make educational program discovery more efficient and more transparent.",
    skills: ["Product Strategy", "UX", "AI", "Education"],
    externalUrl: "https://groundwork-omega-flax.vercel.app/",
  },
  {
    slug: "telehealth-growth",
    title: "From Zero to 3× Growth",
    categories: ["Client Work", "Startup", "Healthcare"],
    problem:
      "A telehealth startup needed to establish digital customer acquisition from scratch.",
    approach:
      "Built the digital marketing foundation, launched acquisition programs, and established measurement frameworks for rapid iteration.",
    outcome: "Enabled three consecutive quarters of 3× growth.",
    skills: ["Startup Growth", "Acquisition", "Analytics", "Go-to-Market"],
    featured: true,
  },
  {
    slug: "interim-executive-leadership",
    title: "Interim Executive Leadership",
    categories: ["Leadership", "E-Commerce"],
    problem:
      "Two companies needed experienced executive marketing leadership during maternity leaves while maintaining business momentum.",
    approach:
      "Stepped into VP and Head of Growth roles, leading teams, improving reporting, guiding CRM strategy, forecasting demand, and supporting executive decision-making.",
    outcome:
      "Maintained continuity while introducing stronger measurement and strategic planning processes.",
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
