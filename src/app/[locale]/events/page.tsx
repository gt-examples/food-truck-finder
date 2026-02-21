"use client";

import { useState } from "react";
import { T, Num, Plural, Branch } from "gt-next";
import { events } from "@/data/events";
import { trucks } from "@/data/trucks";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

function getEventStatus(event: { date: string; startTime: string; endTime: string; isPast: boolean }) {
  if (event.isPast) return "past";
  const now = new Date();
  const eventDate = new Date(`${event.date}T${event.startTime}`);
  const eventEnd = new Date(`${event.date}T${event.endTime}`);
  if (now >= eventDate && now <= eventEnd) return "happening";
  return "upcoming";
}

export default function EventsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showPast, setShowPast] = useState(false);

  const truckMap: Record<string, string> = {};
  trucks.forEach((t) => (truckMap[t.slug] = t.name));

  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-center mb-2">
          Events
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-8">
          Food truck rallies, festivals, and pop-up gatherings
        </p>
      </T>

      {/* Upcoming */}
      <div className="space-y-4 mb-12">
        {upcoming.map((event) => {
          const status = getEventStatus(event);
          const isExpanded = expanded === event.slug;

          return (
            <div
              key={event.slug}
              className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden"
            >
              <button
                onClick={() => setExpanded(isExpanded ? null : event.slug)}
                className="w-full text-left p-6 hover:bg-stone-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <T>
                        <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold">
                          {event.name}
                        </h2>
                      </T>
                      <T>
                        <Branch
                          branch={status}
                          upcoming={<Badge color="blue">Upcoming</Badge>}
                          happening={<Badge color="green">Happening Now</Badge>}
                          past={<Badge color="gray">Past Event</Badge>}
                        />
                      </T>
                    </div>
                    <T>
                      <p className="text-sm text-[var(--color-muted)]">
                        {event.location} · {event.date} · {event.startTime} - {event.endTime}
                      </p>
                    </T>
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    <T>
                      <Plural
                        n={event.truckSlugs.length}
                        singular={<><Num>{event.truckSlugs.length}</Num> truck</>}
                        plural={<><Num>{event.truckSlugs.length}</Num> trucks</>}
                      />
                    </T>
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-[var(--color-border)] pt-4">
                  <T>
                    <p className="text-[var(--color-muted)] mb-4">{event.description}</p>
                    <h3 className="font-[family-name:var(--font-nunito)] font-semibold mb-2">
                      Participating Trucks
                    </h3>
                  </T>
                  <div className="flex flex-wrap gap-2">
                    {event.truckSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/trucks/${slug}`}
                        className="px-3 py-1.5 bg-orange-50 text-[var(--color-primary)] rounded-full text-sm font-medium hover:bg-orange-100 transition-colors"
                      >
                        {truckMap[slug] || slug}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Past events toggle */}
      {past.length > 0 && (
        <div>
          <button
            onClick={() => setShowPast(!showPast)}
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-4"
          >
            <T>{showPast ? "Hide past events" : "Show past events"}</T>
          </button>

          {showPast && (
            <div className="space-y-4 opacity-60">
              {past.map((event) => (
                <div
                  key={event.slug}
                  className="bg-white rounded-2xl border border-[var(--color-border)] p-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <T>
                      <h2 className="font-[family-name:var(--font-nunito)] text-lg font-bold">
                        {event.name}
                      </h2>
                    </T>
                    <Badge color="gray"><T>Past Event</T></Badge>
                  </div>
                  <T>
                    <p className="text-sm text-[var(--color-muted)]">
                      {event.location} · {event.date}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] mt-2">
                      {event.description}
                    </p>
                  </T>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
