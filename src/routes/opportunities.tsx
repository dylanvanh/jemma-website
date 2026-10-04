import { createFileRoute } from "@tanstack/react-router";
import { OpportunityDashboard } from "@/features/opportunities/OpportunityDashboard";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Desk | Jemma Wedgwood" },
      {
        name: "description",
        content:
          "A private working shortlist of qualified jobs and prospective interior-design clients for Jemma Wedgwood.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  headers: () => ({ "X-Robots-Tag": "noindex, nofollow" }),
  component: () => (
    <main id="main-content">
      <OpportunityDashboard />
    </main>
  ),
});
