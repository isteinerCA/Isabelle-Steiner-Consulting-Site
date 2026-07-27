export type TagColorKey =
  | "blue"
  | "violet"
  | "teal"
  | "green"
  | "amber"
  | "rose"
  | "indigo"
  | "sage"
  | "slate"
  | "coral"
  | "plum"
  | "sky"
  | "gold";

/** Same label → same color everywhere on the site */
const tagColorMap: Record<string, TagColorKey> = {
  // Engagement type
  "Client Work": "blue",
  "Product Lab": "indigo",
  Leadership: "slate",
  Startup: "coral",

  // Capabilities
  AI: "violet",
  Analytics: "teal",
  "Marketing Analytics": "teal",
  Measurement: "teal",
  Forecasting: "teal",
  "Claude API": "violet",
  Automation: "violet",
  "Prompt Engineering": "violet",
  Python: "slate",

  // Domains
  Healthcare: "green",
  Education: "gold",
  "E-Commerce": "amber",
  "Baby Products": "amber",

  // Strategy & growth
  "Growth Strategy": "rose",
  "Startup Growth": "coral",
  Incrementality: "rose",
  "Paid Media": "rose",
  Acquisition: "rose",
  "Go-to-Market": "rose",
  "Executive Strategy": "slate",
  "Executive Leadership": "slate",
  "Team Management": "slate",
  CRM: "slate",

  // Product & design
  "Product Design": "plum",
  "Product Strategy": "plum",
  UX: "plum",
};

export function getTagColorKey(label: string): TagColorKey {
  return tagColorMap[label] ?? "blue";
}

export const pillarAccents: Record<string, TagColorKey> = {
  Build: "blue",
  Optimize: "teal",
  Invent: "violet",
};
