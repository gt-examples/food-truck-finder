# Food Truck Finder

Discover local food trucks, browse menus, check schedules, and find your next favorite meal on wheels.

**[Live Demo](https://food-truck-finder.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Food Truck Finder is a fully internationalized directory app that lets users explore food trucks, view detailed menus with prices, check weekly schedules, browse upcoming events, and save favorites. It demonstrates real-world i18n patterns including locale-aware currency formatting, pluralization, and conditional rendering by locale.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by locale
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/food-truck-finder.git
cd food-truck-finder
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
