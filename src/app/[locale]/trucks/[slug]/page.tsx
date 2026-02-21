"use client";

import { use } from "react";
import Link from "next/link";
import { T, Num, Currency, Plural, Branch } from "gt-next";
import { trucks } from "@/data/trucks";
import { menuItems, DietaryTag } from "@/data/menus";
import { scheduleEntries, days } from "@/data/schedules";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import { isTruckOpenNow, getDayLabel, formatTime } from "@/lib/utils";

const dietaryColors: Record<DietaryTag, string> = {
  vegetarian: "green",
  vegan: "teal",
  "gluten-free": "purple",
};

const dietaryLabels: Record<DietaryTag, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
};

const spicyLabels = ["Mild", "Medium", "Spicy", "Extra Spicy"];

export default function TruckDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const truck = trucks.find((t) => t.slug === slug);

  if (!truck) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <T>
          <h1 className="text-2xl font-bold">Truck not found</h1>
          <p className="mt-2 text-[var(--color-muted)]">
            The truck you are looking for does not exist.
          </p>
        </T>
        <Link href="/" className="mt-4 inline-block text-[var(--color-primary)] hover:underline">
          <T>Back to home</T>
        </Link>
      </div>
    );
  }

  const menu = menuItems.filter((m) => m.truckSlug === slug);
  const schedule = scheduleEntries.filter((s) => s.truckSlug === slug);
  const isOpen = isTruckOpenNow(slug);
  const categories = [...new Set(menu.map((m) => m.category))];

  const maxReviews = Math.max(...Object.values(truck.ratingBreakdown));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <T>
              <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                {truck.name}
              </h1>
            </T>
            <div className="flex items-center gap-3 mt-2">
              <StarRating rating={truck.rating} size="lg" />
              <T>
                <span className="text-[var(--color-muted)]">
                  <Num>{truck.rating}</Num> · <Plural n={truck.reviewCount} singular={<><Num>{truck.reviewCount}</Num> review</>} plural={<><Num>{truck.reviewCount}</Num> reviews</>} />
                </span>
              </T>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <T>
                <Branch
                  branch={isOpen ? "open" : "closed"}
                  open={<Badge color="green">Open Now</Badge>}
                  closed={<Badge color="gray">Closed</Badge>}
                />
              </T>
            </div>
          </div>
          <FavoriteButton type="trucks" id={truck.slug} />
        </div>
      </div>

      {/* About */}
      <section className="mb-10">
        <T>
          <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold mb-3">About</h2>
          <p className="text-[var(--color-muted)] leading-relaxed">{truck.description}</p>
        </T>
        <div className="flex flex-wrap gap-2 mt-3">
          {truck.tags.map((tag) => (
            <Badge key={tag} color="gray"><T>{tag}</T></Badge>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="mb-10">
        <T>
          <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold mb-4">Menu</h2>
        </T>
        {categories.map((cat) => (
          <div key={cat} className="mb-6">
            <T>
              <h3 className="font-[family-name:var(--font-nunito)] text-lg font-semibold capitalize mb-3 text-[var(--color-text)]">
                {cat}
              </h3>
            </T>
            <div className="space-y-3">
              {menu
                .filter((m) => m.category === cat)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between p-4 bg-white rounded-xl border border-[var(--color-border)]"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <T>
                          <span className="font-medium">{item.name}</span>
                        </T>
                        {item.popular && <Badge color="orange"><T>Popular</T></Badge>}
                        {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                          <T>
                            <Badge color="red">
                              <Branch
                                branch={`level-${item.spicyLevel}`}
                                level-1={<>{spicyLabels[1]}</>}
                                level-2={<>{spicyLabels[2]}</>}
                                level-3={<>{spicyLabels[3]}</>}
                              />
                            </Badge>
                          </T>
                        )}
                      </div>
                      <T>
                        <p className="text-sm text-[var(--color-muted)] mt-1">{item.description}</p>
                      </T>
                      <div className="flex gap-1.5 mt-2">
                        {item.dietary.map((d) => (
                          <Badge key={d} color={dietaryColors[d]}>
                            <T>{dietaryLabels[d]}</T>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4 font-semibold text-[var(--color-primary)] whitespace-nowrap">
                      <Currency currency="USD">{item.price}</Currency>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Ratings Breakdown */}
      <section className="mb-10">
        <T>
          <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold mb-4">Ratings</h2>
        </T>
        <div className="bg-white rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-bold text-[var(--color-text)]">
              <Num>{truck.rating}</Num>
            </span>
            <div>
              <StarRating rating={truck.rating} size="lg" />
              <T>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  <Plural
                    n={truck.reviewCount}
                    singular={<><Num>{truck.reviewCount}</Num> review</>}
                    plural={<><Num>{truck.reviewCount}</Num> reviews</>}
                  />
                </p>
              </T>
            </div>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = truck.ratingBreakdown[star] || 0;
              const pct = maxReviews > 0 ? (count / maxReviews) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2 text-sm">
                  <span className="w-8 text-right text-[var(--color-muted)]">{star}</span>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-[var(--color-muted)]">
                    <Num>{count}</Num>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="mb-10">
        <T>
          <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold mb-4">Weekly Schedule</h2>
        </T>
        {schedule.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {days.map((day) => {
              const daySchedule = schedule.filter((s) => s.day === day);
              if (daySchedule.length === 0) return null;
              return daySchedule.map((entry, i) => (
                <div
                  key={`${day}-${i}`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-[var(--color-border)]"
                >
                  <div>
                    <T>
                      <p className="font-medium">{getDayLabel(day)}</p>
                      <p className="text-sm text-[var(--color-muted)]">{entry.location}</p>
                    </T>
                  </div>
                  <span className="text-sm text-[var(--color-muted)]">
                    {formatTime(entry.startTime)} - {formatTime(entry.endTime)}
                  </span>
                </div>
              ));
            })}
          </div>
        ) : (
          <T>
            <p className="text-[var(--color-muted)]">No schedule available</p>
          </T>
        )}
      </section>

      <div className="text-center">
        <Link
          href="/"
          className="text-[var(--color-primary)] hover:underline text-sm font-medium"
        >
          <T>Back to all trucks</T>
        </Link>
      </div>
    </div>
  );
}
