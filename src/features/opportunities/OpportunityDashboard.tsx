"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Download,
  MapPin,
  Search,
} from "lucide-react";
import { useDeferredValue, useState } from "react";
import {
  opportunities,
  RESEARCH_VERIFIED_DATE,
  type Opportunity,
  type OpportunityKind,
  type OpportunityPriority,
} from "./opportunities";

type KindFilter = "all" | OpportunityKind;

const KIND_FILTERS: Array<{ label: string; value: KindFilter }> = [
  { label: "All signals", value: "all" },
  { label: "Live roles", value: "job" },
  { label: "Pitch targets", value: "client" },
];

const PRIORITY_LABELS: Record<OpportunityPriority, string> = {
  "act-now": "Act now",
  high: "High priority",
  medium: "Worth a look",
  watch: "Stretch",
};

const JOB_COUNT = opportunities.filter(
  (opportunity) => opportunity.kind === "job",
).length;
const CLIENT_COUNT = opportunities.length - JOB_COUNT;
const CLOSE_MATCH_COUNT = opportunities.filter(
  (opportunity) => opportunity.fitScore >= 85,
).length;
const FEATURED_OPPORTUNITY = opportunities[0]!;

export function OpportunityDashboard() {
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const normalizedSearchQuery = deferredSearchQuery.trim().toLowerCase();

  const filteredOpportunities = opportunities.filter((opportunity) => {
    if (kindFilter !== "all" && opportunity.kind !== kindFilter) {
      return false;
    }

    if (!normalizedSearchQuery) {
      return true;
    }

    const searchableText = [
      opportunity.organization,
      opportunity.title,
      opportunity.location,
      opportunity.summary,
      opportunity.fitReason,
      ...opportunity.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearchQuery);
  });

  return (
    <div className="site-shell pt-28 pb-12 md:pt-36 md:pb-20">
      <header className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Opportunity desk / Cape Town
          </p>
          <h1 className="font-heading mt-5 max-w-[11ch] text-6xl leading-[0.9] font-medium tracking-[-0.055em] text-balance sm:text-7xl md:text-8xl">
            The next move, mapped.
          </h1>
        </div>
        <div className="border-accent text-muted-foreground max-w-xl border-l pl-5 text-sm leading-relaxed lg:col-span-4 lg:mb-2">
          <p>
            A qualified shortlist of live roles and business-development leads
            matched to Jemma&apos;s interiors, technical design, branding and
            photography experience.
          </p>
          <p className="mt-3 text-xs font-semibold tracking-[0.12em] uppercase">
            Sources checked {RESEARCH_VERIFIED_DATE}
          </p>
        </div>
      </header>

      <section
        aria-label="Opportunity summary"
        className="border-border mt-14 grid border-y sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
      >
        <SummaryStat label="Qualified signals" value={opportunities.length} />
        <SummaryStat label="Live roles" value={JOB_COUNT} />
        <SummaryStat label="Pitch targets" value={CLIENT_COUNT} />
        <SummaryStat label="Close matches" value={CLOSE_MATCH_COUNT} />
      </section>

      <section
        aria-labelledby="focus-title"
        className="bg-foreground text-background relative mt-12 overflow-hidden md:mt-16"
      >
        <div className="bg-accent absolute inset-y-0 left-0 w-1.5" />
        <div className="grid gap-10 px-6 py-7 md:px-10 md:py-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-background/55 text-xs font-semibold tracking-[0.18em] uppercase">
              Apply first / 48-hour window
            </p>
            <div className="mt-8 flex items-end gap-3">
              <span className="font-heading text-7xl leading-none font-medium tabular-nums">
                {FEATURED_OPPORTUNITY.fitScore}
              </span>
              <span className="text-background/60 mb-2 text-xs font-semibold tracking-[0.14em] uppercase">
                Fit score
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
              {FEATURED_OPPORTUNITY.organization}
            </p>
            <h2
              id="focus-title"
              className="font-heading mt-3 text-4xl leading-[1.02] font-medium tracking-[-0.035em] text-balance"
            >
              {FEATURED_OPPORTUNITY.title}
            </h2>
            <p className="text-background/70 mt-5 max-w-xl text-sm leading-relaxed">
              {FEATURED_OPPORTUNITY.nextAction}
            </p>
          </div>

          <div className="border-background/20 flex flex-col items-start justify-between gap-8 border-t pt-6 lg:col-span-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <p className="text-background/55 text-xs font-semibold tracking-[0.14em] uppercase">
                Deadline
              </p>
              <p className="mt-2 text-sm font-semibold">
                {FEATURED_OPPORTUNITY.timing}
              </p>
            </div>
            <Button
              asChild
              className="bg-background text-foreground hover:bg-background/85 min-h-11 rounded-none px-5"
            >
              <a
                href={FEATURED_OPPORTUNITY.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open application
                <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="opportunity-list-title"
        className="mt-16 md:mt-24"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
              Working list
            </p>
            <h2
              id="opportunity-list-title"
              className="font-heading mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl"
            >
              {filteredOpportunities.length} opportunities
            </h2>
          </div>

          <div className="grid gap-3 lg:col-span-7 lg:grid-cols-[minmax(13rem,1fr)_auto]">
            <label className="relative block">
              <span className="sr-only">Search opportunities</span>
              <Search
                aria-hidden="true"
                className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2"
              />
              <Input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search company, skill or location"
                className="bg-card h-11 rounded-none pl-11"
              />
            </label>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none px-5"
            >
              <a href="/jemma-opportunities.csv" download>
                <Download aria-hidden="true" className="mr-2 size-4" />
                Download spreadsheet
              </a>
            </Button>
          </div>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Filter opportunities"
        >
          {KIND_FILTERS.map((filter) => {
            const isActive = filter.value === kindFilter;

            return (
              <Button
                key={filter.value}
                type="button"
                variant={isActive ? "default" : "outline"}
                aria-pressed={isActive}
                onClick={() => setKindFilter(filter.value)}
                className="min-h-11 rounded-none px-5"
              >
                {filter.label}
              </Button>
            );
          })}
        </div>

        <div className="mt-10">
          {filteredOpportunities.length > 0 ? (
            <div>
              {filteredOpportunities.map((opportunity, index) => (
                <OpportunityListItem
                  key={opportunity.id}
                  opportunity={opportunity}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="border-border border-y py-16 text-center">
              <p className="font-heading text-3xl font-medium">
                No matching signals.
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Try a broader skill, company or location.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-border flex items-end justify-between gap-5 border-b px-1 py-5 sm:border-b-0 sm:px-5 first:sm:pl-0 odd:sm:border-r lg:border-r last:lg:border-r-0 last:lg:pr-0 lg:odd:border-r">
      <p className="text-muted-foreground max-w-24 text-xs font-semibold tracking-[0.13em] uppercase">
        {label}
      </p>
      <p className="font-heading text-4xl leading-none font-medium tabular-nums">
        {String(value).padStart(2, "0")}
      </p>
    </div>
  );
}

function OpportunityListItem({
  opportunity,
  index,
}: {
  opportunity: Opportunity;
  index: number;
}) {
  const KindIcon = opportunity.kind === "job" ? BriefcaseBusiness : Building2;

  return (
    <article className="border-border group grid gap-6 border-t py-7 last:border-b lg:grid-cols-[2.5rem_minmax(0,1.25fr)_minmax(15rem,0.8fr)_7.5rem] lg:gap-7 lg:py-9">
      <p className="text-muted-foreground text-xs font-semibold tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </p>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-secondary text-secondary-foreground inline-flex min-h-7 items-center gap-1.5 px-2.5 text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
            <KindIcon aria-hidden="true" className="size-3.5" />
            {opportunity.kind === "job" ? "Job" : "Client"}
          </span>
          <PriorityBadge priority={opportunity.priority} />
          <span className="text-muted-foreground text-xs font-medium">
            {opportunity.signal}
          </span>
        </div>

        <p className="text-muted-foreground mt-6 text-xs font-semibold tracking-[0.13em] uppercase">
          {opportunity.organization}
        </p>
        <h3 className="font-heading mt-2 max-w-2xl text-3xl leading-[1.03] font-medium tracking-[-0.035em] text-balance md:text-4xl">
          {opportunity.title}
        </h3>
        <p className="text-muted-foreground mt-4 flex flex-wrap items-center gap-2 text-sm">
          <MapPin aria-hidden="true" className="size-4 shrink-0" />
          {opportunity.location}
          <span aria-hidden="true">/</span>
          {opportunity.timing}
        </p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed">
          {opportunity.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="border-border text-muted-foreground border px-2.5 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <DetailBlock label="Why it fits" value={opportunity.fitReason} />
        <DetailBlock label="Watch for" value={opportunity.caution} />
        <DetailBlock label="Next move" value={opportunity.nextAction} strong />
      </div>

      <div className="flex flex-row items-end justify-between gap-6 lg:flex-col lg:items-stretch">
        <div className="min-w-24">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-muted-foreground text-[0.68rem] font-semibold tracking-[0.13em] uppercase">
              Match
            </span>
            <span className="font-heading text-3xl font-medium tabular-nums">
              {opportunity.fitScore}
            </span>
          </div>
          <div
            className="bg-secondary mt-2 h-1 overflow-hidden"
            role="img"
            aria-label={`${opportunity.fitScore} percent fit score`}
          >
            <div
              className="bg-accent h-full"
              style={{ width: `${opportunity.fitScore}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2 lg:flex-col">
          <Button
            asChild
            variant="outline"
            className="min-h-11 rounded-none px-4"
          >
            <a href={opportunity.sourceUrl} target="_blank" rel="noreferrer">
              Source
              <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
            </a>
          </Button>
          {opportunity.contactUrl ? (
            <Button asChild className="min-h-11 rounded-none px-4">
              <a href={opportunity.contactUrl} target="_blank" rel="noreferrer">
                Contact
                <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function PriorityBadge({ priority }: { priority: OpportunityPriority }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center px-2.5 text-[0.68rem] font-semibold tracking-[0.12em] uppercase",
        priority === "act-now" && "bg-accent text-accent-foreground",
        priority === "high" && "bg-foreground text-background",
        priority === "medium" && "border-border text-foreground border",
        priority === "watch" &&
          "border-border text-muted-foreground border border-dashed",
      )}
    >
      {PRIORITY_LABELS[priority]}
    </span>
  );
}

function DetailBlock({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div>
      <p className="text-muted-foreground text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
        {label}
      </p>
      <p
        className={cn("mt-2 text-sm leading-relaxed", strong && "font-medium")}
      >
        {value}
      </p>
    </div>
  );
}
