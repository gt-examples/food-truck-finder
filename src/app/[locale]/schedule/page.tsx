"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { T, Num, Plural } from "gt-next";
import { scheduleEntries, days, DayOfWeek } from "@/data/schedules";
import { trucks } from "@/data/trucks";
import Badge from "@/components/ui/Badge";
import { getCurrentDay, getDayLabel, formatTime } from "@/lib/utils";

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(getCurrentDay());
  const [weekView, setWeekView] = useState(false);

  const truckMap = useMemo(() => {
    const map: Record<string, string> = {};
    trucks.forEach((t) => (map[t.slug] = t.name));
    return map;
  }, []);

  const dayEntries = useMemo(() => {
    return scheduleEntries.filter((e) => e.day === selectedDay);
  }, [selectedDay]);

  // Group by location
  const byLocation = useMemo(() => {
    const groups: Record<string, typeof dayEntries> = {};
    dayEntries.forEach((e) => {
      if (!groups[e.location]) groups[e.location] = [];
      groups[e.location].push(e);
    });
    return groups;
  }, [dayEntries]);

  // For week view: all locations
  const allLocations = useMemo(() => {
    return [...new Set(scheduleEntries.map((e) => e.location))].sort();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-center mb-2">
          Weekly Schedule
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-8">
          Find out where your favorite trucks will be
        </p>
      </T>

      {/* View toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-xl border border-[var(--color-border)] overflow-hidden">
          <button
            onClick={() => setWeekView(false)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              !weekView ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-muted)]"
            }`}
          >
            <T>Day View</T>
          </button>
          <button
            onClick={() => setWeekView(true)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              weekView ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-muted)]"
            }`}
          >
            <T>Week Overview</T>
          </button>
        </div>
      </div>

      {!weekView ? (
        <>
          {/* Day selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDay === day
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-stone-100 text-[var(--color-muted)] hover:bg-stone-200"
                }`}
              >
                <T>{getDayLabel(day)}</T>
              </button>
            ))}
          </div>

          {/* Result count */}
          <div className="mb-6 text-sm text-[var(--color-muted)]">
            <T>
              <Plural
                n={dayEntries.length}
                singular={<><Num>{dayEntries.length}</Num> truck scheduled</>}
                plural={<><Num>{dayEntries.length}</Num> trucks scheduled</>}
              />
            </T>
          </div>

          {/* By location */}
          {Object.entries(byLocation).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(byLocation).map(([location, entries]) => (
                <div key={location}>
                  <T>
                    <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold mb-3">
                      {location}
                    </h2>
                  </T>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {entries.map((entry, i) => (
                      <Link
                        key={i}
                        href={`/trucks/${entry.truckSlug}`}
                        className="bg-white rounded-xl border border-[var(--color-border)] p-4 hover:shadow-sm transition-shadow"
                      >
                        <p className="font-medium text-[var(--color-text)]">
                          {truckMap[entry.truckSlug] || entry.truckSlug}
                        </p>
                        <p className="text-sm text-[var(--color-muted)] mt-1">
                          {formatTime(entry.startTime)} - {formatTime(entry.endTime)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <T>
              <p className="text-center text-[var(--color-muted)] py-12">
                No trucks scheduled for this day
              </p>
            </T>
          )}
        </>
      ) : (
        /* Week grid */
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 text-sm font-medium text-[var(--color-muted)]"></th>
                {days.map((day) => (
                  <th key={day} className="text-center p-2 text-sm font-medium text-[var(--color-text)]">
                    <T>{getDayLabel(day).slice(0, 3)}</T>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allLocations.map((loc) => (
                <tr key={loc} className="border-t border-[var(--color-border)]">
                  <td className="p-2 text-sm font-medium text-[var(--color-text)] whitespace-nowrap">
                    <T>{loc}</T>
                  </td>
                  {days.map((day) => {
                    const entries = scheduleEntries.filter(
                      (e) => e.day === day && e.location === loc
                    );
                    return (
                      <td key={day} className="p-2 text-center">
                        {entries.map((entry, i) => (
                          <div key={i}>
                            <Badge color="orange">
                              {truckMap[entry.truckSlug]?.split(" ")[0] || ""}
                            </Badge>
                          </div>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
