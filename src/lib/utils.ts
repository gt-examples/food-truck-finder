import { DayOfWeek, scheduleEntries } from "@/data/schedules";

const dayMap: Record<number, DayOfWeek> = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export function getCurrentDay(): DayOfWeek {
  return dayMap[new Date().getDay()];
}

export function isTruckOpenNow(truckSlug: string): boolean {
  const now = new Date();
  const currentDay = getCurrentDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return scheduleEntries.some((entry) => {
    if (entry.truckSlug !== truckSlug || entry.day !== currentDay) return false;
    const [startH, startM] = entry.startTime.split(":").map(Number);
    const [endH, endM] = entry.endTime.split(":").map(Number);
    const start = startH * 60 + startM;
    const end = endH * 60 + endM;
    return currentMinutes >= start && currentMinutes <= end;
  });
}

export function getTruckScheduleForDay(truckSlug: string, day: DayOfWeek) {
  return scheduleEntries.filter(
    (e) => e.truckSlug === truckSlug && e.day === day
  );
}

export function getScheduleForDay(day: DayOfWeek) {
  return scheduleEntries.filter((e) => e.day === day);
}

export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export function getDayLabel(day: DayOfWeek): string {
  const labels: Record<DayOfWeek, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };
  return labels[day];
}
