import { OpportunityDashboard } from "./_components/OpportunityDashboard";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Opportunity Desk | Jemma Wedgwood",
  },
  description:
    "A private working shortlist of qualified jobs and prospective interior-design clients for Jemma Wedgwood.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpportunitiesPage() {
  return (
    <main id="main-content">
      <OpportunityDashboard />
    </main>
  );
}
