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
  "Product Sandbox": "indigo",
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

/** Mirrors the .tag-* background/text pairs in globals.css, for use in inline styles. */
export const tagColorHexMap: Record<TagColorKey, { bg: string; fg: string }> = {
  blue: { bg: "#e3edf5", fg: "#1e4a66" },
  violet: { bg: "#ece9fb", fg: "#5b3d8f" },
  teal: { bg: "#e0f2f0", fg: "#1f5f56" },
  green: { bg: "#d8eddf", fg: "#1a5c38" },
  amber: { bg: "#f6ecdf", fg: "#8a5a24" },
  rose: { bg: "#f5e8eb", fg: "#7a3a4a" },
  indigo: { bg: "#ddd6f0", fg: "#4a3a7a" },
  sage: { bg: "#e8efe4", fg: "#4a6344" },
  slate: { bg: "#e8eaee", fg: "#3d4654" },
  coral: { bg: "#faece6", fg: "#9a4a32" },
  plum: { bg: "#f0e6f0", fg: "#6a4568" },
  sky: { bg: "#e8edf8", fg: "#3a5088" },
  gold: { bg: "#f5eed8", fg: "#7a5c1e" },
};
