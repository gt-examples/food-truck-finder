const colorMap: Record<string, string> = {
  green: "bg-emerald-100 text-emerald-700",
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
  gray: "bg-stone-100 text-stone-500",
  pink: "bg-pink-100 text-pink-700",
  teal: "bg-teal-100 text-teal-700",
};

export default function Badge({
  children,
  color = "gray",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        colorMap[color] || colorMap.gray
      }`}
    >
      {children}
    </span>
  );
}
