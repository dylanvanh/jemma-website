export type OpportunityKind = "job" | "client";

export type OpportunityPriority = "act-now" | "high" | "medium" | "watch";

export interface Opportunity {
  id: string;
  kind: OpportunityKind;
  organization: string;
  title: string;
  location: string;
  fitScore: number;
  priority: OpportunityPriority;
  signal: string;
  timing: string;
  summary: string;
  fitReason: string;
  caution: string;
  nextAction: string;
  tags: string[];
  sourceLabel: string;
  sourceUrl: string;
  contactUrl?: string;
}

export const RESEARCH_VERIFIED_DATE = "31 July 2026";

export const opportunities = [
  {
    id: "universal-creative-coordinator",
    kind: "job",
    organization: "Universal Kitchens",
    title: "Creative Brand & Social Media Coordinator",
    location: "Cape Town",
    fitScore: 88,
    priority: "act-now",
    signal: "Live role",
    timing: "Closes 02 Aug 2026",
    summary:
      "A design-led content role covering social media, campaigns, Reels and community, with photography and videography called out as a bonus.",
    fitReason:
      "Jemma's photography, branding, Adobe and interiors background creates a rare match for a home-design brand.",
    caution:
      "This is primarily a content and marketing role rather than a conventional interior-design position.",
    nextAction:
      "Send a concise CV, portfolio, social links and three strong photography or campaign examples today.",
    tags: ["Photography", "Branding", "Content"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/universal-kitchens/20260513-creative-brand-social-media-coordinator.htm",
  },
  {
    id: "meg-vaun-interior-designer",
    kind: "job",
    organization: "Meg Vaun Interiors",
    title: "Interior Designer",
    location: "Hout Bay, Cape Town",
    fitScore: 93,
    priority: "high",
    signal: "Live role",
    timing: "Closes 06 Sep 2026",
    summary:
      "Manage high-end hospitality and residential projects across South and East Africa from concept through installation.",
    fitReason:
      "The brief directly matches Jemma's hospitality, residential, SketchUp, AutoCAD, rendering and detail-led portfolio.",
    caution:
      "The listing asks for at least three years of experience, own transport, a valid passport and installation travel.",
    nextAction:
      "Lead the application with hospitality work, technical drawings and one project shown from concept to installation.",
    tags: ["Hospitality", "Residential", "Full project cycle"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/meg-vaun-interiors/20260729-interior-designer.htm",
  },
  {
    id: "easylife-design-support",
    kind: "job",
    organization: "Easylife Kitchens",
    title: "Admin & Design Support Coordinator",
    location: "Tokai or Claremont, Cape Town",
    fitScore: 90,
    priority: "high",
    signal: "Live role",
    timing: "Closes 06 Sep 2026",
    summary:
      "Support designers with presentations, mood boards, finish selections, specification packs, showroom operations and project coordination.",
    fitReason:
      "Interior training, presentation skills, CAD familiarity and visual content experience all map cleanly to the role.",
    caution:
      "The position includes substantial administration, customer service and retail showroom hours.",
    nextAction:
      "Apply with a one-page CV and a short PDF showing mood boards, finish schedules and organized project documentation.",
    tags: ["Design support", "Mood boards", "Coordination"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/easylife-kitchens/20260508-admin-design-sales-consultants.htm",
  },
  {
    id: "italtile-showroom-designer",
    kind: "job",
    organization: "Italtile",
    title: "Independent Retail Showroom Designer",
    location: "Cape Town or Johannesburg",
    fitScore: 84,
    priority: "high",
    signal: "Live role",
    timing: "Closes 30 Aug 2026",
    summary:
      "Design showroom upgrades, new fit-outs, product displays and customer journeys while coordinating suppliers and contractors.",
    fitReason:
      "Jemma's space planning, visual storytelling, finishes and technical design skills suit a premium retail environment.",
    caution:
      "They want proven retail or showroom work, independent project management and regular travel.",
    nextAction:
      "Reframe the portfolio around customer flow, material selection and buildable display concepts before applying.",
    tags: ["Retail", "Space planning", "Fit-out"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/italtile/20260611-showroom-designer.htm",
  },
  {
    id: "table-bay-decorator",
    kind: "job",
    organization: "Table Bay Curtains & Blinds",
    title: "Senior Sales Consultant / Decorator",
    location: "Montague Gardens, Cape Town",
    fitScore: 66,
    priority: "medium",
    signal: "Live role",
    timing: "Closes 06 Sep 2026",
    summary:
      "Own window-dressing and soft-furnishing projects from consultation and measurement through quotation and site completion.",
    fitReason:
      "The client-facing decorating work rewards material judgment, site confidence and a strong eye for composition.",
    caution:
      "Hands-on window-treatment, measuring and quotation experience is listed as essential.",
    nextAction:
      "Only apply if Jemma can evidence fabric specification, site measurement and client-facing sales experience.",
    tags: ["Soft furnishings", "Client service", "Site work"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/table-bay-curtains/20260728-sales-consultant-decorator.htm",
  },
  {
    id: "universal-kitchen-designer",
    kind: "job",
    organization: "Universal Kitchens",
    title: "Kitchen Designer Sales Consultant",
    location: "V&A Waterfront, Cape Town",
    fitScore: 54,
    priority: "watch",
    signal: "Live role",
    timing: "Closes 02 Aug 2026",
    summary:
      "A commission-led kitchen design and sales role combining client consultation, 3D design and project conversion.",
    fitReason:
      "Jemma has the interior-design foundation and client presentation skills needed to learn the category.",
    caution:
      "The listing asks for five years in a similar kitchen role and experience with Winner Compusoft.",
    nextAction:
      "Treat as a stretch application only if she has unlisted kitchen or cabinetry experience.",
    tags: ["Kitchens", "3D design", "Sales"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/universal-kitchens/20260514-kitchen-designer-sales-consultant.htm",
  },
  {
    id: "kt-cad-technologist",
    kind: "job",
    organization: "KT Interior Architectural Studio",
    title: "Mid-Level CAD Technologist",
    location: "Cape Town",
    fitScore: 48,
    priority: "watch",
    signal: "Live role",
    timing: "Closes 09 Aug 2026",
    summary:
      "Produce coordinated Revit and AutoCAD construction packages for restaurant, hospitality, residential and rollout projects.",
    fitReason:
      "Technical drawings, rendering and hospitality exposure align with the work itself.",
    caution:
      "The role requires five years of experience plus advanced Revit, documentation and services coordination.",
    nextAction:
      "Do not prioritize unless Jemma can demonstrate advanced Revit and a full construction-documentation set.",
    tags: ["Revit", "Technical drawings", "Construction"],
    sourceLabel: "Interior Placements",
    sourceUrl:
      "https://www.interiorplacements.co.za/kt-interior-architectural-studio/20260702-mid-level-cad-technologist.htm",
  },
  {
    id: "noname-hospitality-group",
    kind: "client",
    organization: "NoName Hospitality Group",
    title: "JARRYDS expansion design support",
    location: "Sea Point, Cape Town",
    fitScore: 91,
    priority: "high",
    signal: "Expansion signal",
    timing: "Project announcement: May 2026",
    summary:
      "The group publicly described current JARRYDS work as its biggest project yet and operates visually distinctive hospitality venues.",
    fitReason:
      "Jemma can combine hospitality interiors, custom details, branding and photography in one compact local offer.",
    caution:
      "This is an unsolicited pitch, so a focused idea will outperform a broad portfolio introduction.",
    nextAction:
      "Send a five-slide mini-deck proposing concept support, custom furniture details and launch photography.",
    tags: ["Hospitality", "Brand experience", "Photography"],
    sourceLabel: "Project announcement",
    sourceUrl: "https://www.instagram.com/reel/DYSO6pRCGTO/",
    contactUrl: "https://www.nonamehg.com/contact",
  },
  {
    id: "berman-brothers-mont-reve",
    kind: "client",
    organization: "Berman Brothers Group",
    title: "Mont Reve furnishing & image package",
    location: "Sea Point, Cape Town",
    fitScore: 89,
    priority: "high",
    signal: "Recently marketed",
    timing: "Campaign active in Jul 2026",
    summary:
      "Mont Reve combines luxury apartments, fully furnished hotel residences, three pools and 1,500 square metres of curated retail.",
    fitReason:
      "The project sits directly at the intersection of high-end residential, hospitality styling and property photography.",
    caution:
      "Core architecture and interiors are complete, so the offer must target styling, buyer packages or marketing assets.",
    nextAction:
      "Pitch a fixed-scope furnished-residence refresh and photography package for owners, listings or the hotel operator.",
    tags: ["Luxury residential", "Styling", "Property imagery"],
    sourceLabel: "Official project page",
    sourceUrl: "https://www.bermanbros.co.za/projects/mont-reve",
    contactUrl: "https://www.bermanbros.co.za/contact-us",
  },
  {
    id: "tricolt-the-madison",
    kind: "client",
    organization: "Tricolt Group",
    title: "The Madison buyer interior packages",
    location: "Bree Street, Cape Town",
    fitScore: 87,
    priority: "high",
    signal: "Now selling",
    timing: "Sales campaign active in Jul 2026",
    summary:
      "The Madison is a new mixed residential, retail and hospitality address with apartments, penthouses and amenity spaces.",
    fitReason:
      "Jemma's residential planning, furniture design and calm visual language suit investor and owner furnishing packages.",
    caution:
      "The development already has an interior direction, so the pitch should complement it rather than redesign it.",
    nextAction:
      "Offer three tiered apartment furnishing packages plus styled completion photography for buyers and short-term letting.",
    tags: ["Residential", "Furniture packages", "Show units"],
    sourceLabel: "Official development site",
    sourceUrl: "https://www.themadison.co.za/",
    contactUrl: "https://www.themadison.co.za/#contact",
  },
  {
    id: "mama-residences",
    kind: "client",
    organization: "Mama Residences Cape Town",
    title: "Investor furnishing & listing package",
    location: "Bree Street, Cape Town",
    fitScore: 86,
    priority: "high",
    signal: "Now selling",
    timing: "Opening late 2026",
    summary:
      "Sixty-two branded residences are selling alongside the Mama Shelter launch, with studios and larger apartments still available.",
    fitReason:
      "Investors need personality-led furnishing, durable specification and strong listing imagery that respects the Mama brand.",
    caution:
      "Brand standards will be strict and one-bedroom inventory is already sold out.",
    nextAction:
      "Approach the sales team with one studio mood board and a priced furnishing-plus-photography package for investors.",
    tags: ["Branded residences", "Investor package", "Photography"],
    sourceLabel: "Official residences site",
    sourceUrl: "https://mamaresidencescapetown.com/",
    contactUrl: "https://mamaresidencescapetown.com/#enquire",
  },
  {
    id: "mama-shelter-cape-town",
    kind: "client",
    organization: "Mama Shelter Cape Town",
    title: "Pre-opening styling & launch content",
    location: "Bree Street, Cape Town",
    fitScore: 78,
    priority: "medium",
    signal: "Pre-opening",
    timing: "Bookings open for 01 Dec 2026",
    summary:
      "The 127-room hotel is preparing restaurant, rooftop, pool bars, coworking areas and event ateliers for a late-2026 opening.",
    fitReason:
      "A local designer-photographer can support final styling, art placement and launch-day visual content across many spaces.",
    caution:
      "This is a global brand with established designers and procurement, so vendor access may be difficult.",
    nextAction:
      "Identify the Cape Town pre-opening marketing or operations lead, then pitch a tightly scoped local styling and image day.",
    tags: ["Hotel", "Pre-opening", "Launch content"],
    sourceLabel: "Official hotel page",
    sourceUrl: "https://mamashelter.com/cape-town/",
  },
  {
    id: "cape-town-edition",
    kind: "client",
    organization: "The Cape Town EDITION",
    title: "Pre-opening local creative support",
    location: "V&A Waterfront, Cape Town",
    fitScore: 73,
    priority: "medium",
    signal: "Pre-opening hiring",
    timing: "Opening Sep-Oct 2026",
    summary:
      "Marriott is staffing its 142-room Cape Town EDITION before launch, including multiple guest, sales and housing roles.",
    fitReason:
      "Hospitality knowledge and architectural photography could support local storytelling, final styling or launch assets.",
    caution:
      "The main design team is already appointed and large-brand procurement can make unsolicited creative work difficult to place.",
    nextAction:
      "Target the local pre-opening marketing lead with a Cape Town-specific photography treatment, not a general design pitch.",
    tags: ["Luxury hotel", "Pre-opening", "Photography"],
    sourceLabel: "Marriott pre-opening role",
    sourceUrl:
      "https://careers.marriott.com/sales-coordinator-the-cape-town-edition-hotel-pre-opening/job/78808CAF7E7986D82A6FBF3164FFF1EC",
    contactUrl: "https://www.editionhotels.com/contact/",
  },
] satisfies Opportunity[];
