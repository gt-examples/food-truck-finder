export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export interface ScheduleEntry {
  truckSlug: string;
  day: DayOfWeek;
  location: string;
  locationArea: string;
  startTime: string;
  endTime: string;
}

export const scheduleEntries: ScheduleEntry[] = [
  // Monday
  { truckSlug: "kimchi-king", day: "monday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "taco-libre", day: "monday", location: "University District", locationArea: "university", startTime: "11:00", endTime: "15:00" },
  { truckSlug: "the-green-machine", day: "monday", location: "Tech Park", locationArea: "tech-park", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "burger-blitz", day: "monday", location: "Waterfront Park", locationArea: "waterfront", startTime: "11:30", endTime: "14:30" },
  { truckSlug: "naan-stop", day: "monday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "14:00" },

  // Tuesday
  { truckSlug: "smoke-signal-bbq", day: "tuesday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "catch-of-the-day", day: "tuesday", location: "Waterfront Park", locationArea: "waterfront", startTime: "11:00", endTime: "15:00" },
  { truckSlug: "gyro-heroes", day: "tuesday", location: "University District", locationArea: "university", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "ramen-rider", day: "tuesday", location: "Tech Park", locationArea: "tech-park", startTime: "11:30", endTime: "14:30" },
  { truckSlug: "pasta-la-vista", day: "tuesday", location: "Arts District", locationArea: "arts", startTime: "11:00", endTime: "14:00" },

  // Wednesday
  { truckSlug: "kimchi-king", day: "wednesday", location: "Tech Park", locationArea: "tech-park", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "taco-libre", day: "wednesday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "15:00" },
  { truckSlug: "sugar-rush", day: "wednesday", location: "University District", locationArea: "university", startTime: "12:00", endTime: "16:00" },
  { truckSlug: "island-grill", day: "wednesday", location: "Waterfront Park", locationArea: "waterfront", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "the-green-machine", day: "wednesday", location: "Arts District", locationArea: "arts", startTime: "11:00", endTime: "14:00" },

  // Thursday
  { truckSlug: "smoke-signal-bbq", day: "thursday", location: "Tech Park", locationArea: "tech-park", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "naan-stop", day: "thursday", location: "University District", locationArea: "university", startTime: "11:00", endTime: "14:00" },
  { truckSlug: "catch-of-the-day", day: "thursday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "15:00" },
  { truckSlug: "burger-blitz", day: "thursday", location: "Riverside Market", locationArea: "riverside", startTime: "11:30", endTime: "14:30" },
  { truckSlug: "ramen-rider", day: "thursday", location: "Arts District", locationArea: "arts", startTime: "11:30", endTime: "14:30" },

  // Friday
  { truckSlug: "kimchi-king", day: "friday", location: "Waterfront Park", locationArea: "waterfront", startTime: "11:00", endTime: "20:00" },
  { truckSlug: "taco-libre", day: "friday", location: "Waterfront Park", locationArea: "waterfront", startTime: "11:00", endTime: "21:00" },
  { truckSlug: "smoke-signal-bbq", day: "friday", location: "Riverside Market", locationArea: "riverside", startTime: "11:00", endTime: "20:00" },
  { truckSlug: "sugar-rush", day: "friday", location: "Downtown Plaza", locationArea: "downtown", startTime: "14:00", endTime: "21:00" },
  { truckSlug: "gyro-heroes", day: "friday", location: "Arts District", locationArea: "arts", startTime: "11:00", endTime: "20:00" },
  { truckSlug: "pasta-la-vista", day: "friday", location: "Tech Park", locationArea: "tech-park", startTime: "11:00", endTime: "15:00" },
  { truckSlug: "island-grill", day: "friday", location: "Riverside Market", locationArea: "riverside", startTime: "11:00", endTime: "20:00" },

  // Saturday
  { truckSlug: "kimchi-king", day: "saturday", location: "Riverside Market", locationArea: "riverside", startTime: "10:00", endTime: "18:00" },
  { truckSlug: "taco-libre", day: "saturday", location: "Riverside Market", locationArea: "riverside", startTime: "10:00", endTime: "18:00" },
  { truckSlug: "smoke-signal-bbq", day: "saturday", location: "Central Park", locationArea: "central-park", startTime: "10:00", endTime: "17:00" },
  { truckSlug: "the-green-machine", day: "saturday", location: "Central Park", locationArea: "central-park", startTime: "10:00", endTime: "16:00" },
  { truckSlug: "catch-of-the-day", day: "saturday", location: "Waterfront Park", locationArea: "waterfront", startTime: "10:00", endTime: "17:00" },
  { truckSlug: "sugar-rush", day: "saturday", location: "University District", locationArea: "university", startTime: "11:00", endTime: "18:00" },
  { truckSlug: "naan-stop", day: "saturday", location: "Arts District", locationArea: "arts", startTime: "10:00", endTime: "16:00" },
  { truckSlug: "ramen-rider", day: "saturday", location: "Downtown Plaza", locationArea: "downtown", startTime: "11:00", endTime: "17:00" },
  { truckSlug: "island-grill", day: "saturday", location: "Waterfront Park", locationArea: "waterfront", startTime: "10:00", endTime: "17:00" },
  { truckSlug: "burger-blitz", day: "saturday", location: "Central Park", locationArea: "central-park", startTime: "10:00", endTime: "16:00" },

  // Sunday
  { truckSlug: "taco-libre", day: "sunday", location: "Central Park", locationArea: "central-park", startTime: "10:00", endTime: "16:00" },
  { truckSlug: "the-green-machine", day: "sunday", location: "Riverside Market", locationArea: "riverside", startTime: "10:00", endTime: "15:00" },
  { truckSlug: "sugar-rush", day: "sunday", location: "Central Park", locationArea: "central-park", startTime: "11:00", endTime: "17:00" },
  { truckSlug: "catch-of-the-day", day: "sunday", location: "Waterfront Park", locationArea: "waterfront", startTime: "10:00", endTime: "15:00" },
  { truckSlug: "pasta-la-vista", day: "sunday", location: "Arts District", locationArea: "arts", startTime: "11:00", endTime: "16:00" },
  { truckSlug: "gyro-heroes", day: "sunday", location: "Downtown Plaza", locationArea: "downtown", startTime: "10:00", endTime: "15:00" },
  { truckSlug: "island-grill", day: "sunday", location: "Riverside Market", locationArea: "riverside", startTime: "10:00", endTime: "16:00" },
];

export const days: DayOfWeek[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
