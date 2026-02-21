import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <T>
          <div className="text-center space-y-3">
            <p className="text-sm text-[var(--color-muted)]">
              This is an example application built with{" "}
              <a
                href="https://generaltranslation.com"
                className="text-[var(--color-primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Translation
              </a>{" "}
              to demonstrate internationalization. It is not a real service.
            </p>
            <div className="flex justify-center gap-6 text-xs text-[var(--color-muted)]">
              <a
                href="https://www.mobilecuisine.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mobile Cuisine Magazine
              </a>
              <a
                href="https://streetfoodusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Street Food USA
              </a>
              <a
                href="https://roaminghunger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Roaming Hunger
              </a>
            </div>
          </div>
        </T>
      </div>
    </footer>
  );
}
