import { useState, useEffect } from "react";
import { Logo } from "../components/Logo";
import { Selector } from "../components/Selector";
import { Button, ButtonMini } from "../components/Button";
import { typography } from "../tokens";
import {
  screens,
  CATEGORIES,
  type QuestionScreen,
  type PlaceholderScreen,
  type Category,
} from "../data/screens";

const BASE = import.meta.env.BASE_URL;

// ── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({
  currentCategory,
  progress,
}: {
  currentCategory: Category;
  progress: number;
}) {
  const activeIdx = CATEGORIES.findIndex((c) => c.key === currentCategory);

  return (
    <nav className="flex">
      {CATEGORIES.map((cat, i) => {
        const isPast = i < activeIdx;
        const isCurrent = i === activeIdx;

        return (
          <div key={cat.key} className="flex-1 flex flex-col items-center">
            <span
              className={`pb-(--spacing-spacing-12) ${
                isPast || isCurrent
                  ? "text-(--color-neutral-900)"
                  : "text-(--color-neutral-700)"
              }`}
              style={{
                fontFamily: typography.styles.label3Regular.fontFamily,
                fontSize: typography.styles.label3Regular.fontSize,
                fontWeight: typography.styles.label3Regular.fontWeight,
                lineHeight: typography.styles.label3Regular.lineHeight,
                letterSpacing: typography.styles.label3Regular.letterSpacing,
                textTransform: "uppercase" as const,
              }}
            >
              {cat.label}
            </span>
            <div className="w-full h-[3px] relative bg-(--color-neutral-400)">
              <div
                className="absolute inset-y-0 left-0 bg-(--color-primary-200) transition-all duration-300"
                style={{
                  width: isPast
                    ? "100%"
                    : isCurrent
                      ? `${progress}%`
                      : "0%",
                }}
              />
            </div>
          </div>
        );
      })}
    </nav>
  );
}

// ── Placeholder screen ───────────────────────────────────────────────────────

function TreatmentsIntro() {
  const h3Style = {
    fontFamily: typography.styles.h3.fontFamily,
    fontSize: typography.styles.h3.fontSize,
    fontWeight: typography.styles.h3.fontWeight,
    lineHeight: typography.styles.h3.lineHeight,
    letterSpacing: typography.styles.h3.letterSpacing,
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-(--spacing-spacing-32) pb-(--spacing-spacing-80)">
      <p className="text-(--color-primary-300)" style={h3Style}>
        Others stop at hair type.{" "}
        <span className="bg-(--color-highlight-200)">We start there.</span>
      </p>
      <p className="text-(--color-primary-300) mt-(--spacing-spacing-24)" style={h3Style}>
        Let's create custom haircare that's{" "}
        <span className="bg-(--color-highlight-200)">truly yours.</span>
      </p>
    </div>
  );
}

function LifestyleIntro() {
  const h3Style = {
    fontFamily: typography.styles.h3.fontFamily,
    fontSize: typography.styles.h3.fontSize,
    fontWeight: typography.styles.h3.fontWeight,
    lineHeight: typography.styles.h3.lineHeight,
    letterSpacing: typography.styles.h3.letterSpacing,
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-(--spacing-spacing-32) pb-(--spacing-spacing-80)">
      <p className="text-(--color-primary-300)" style={h3Style}>
        Every answer helps us choose from{" "}
        <span className="bg-(--color-highlight-200)">185+ clean ingredients.</span>
      </p>
      <img
        src={`${BASE}images/RTB2.png`}
        alt=""
        className="mt-(--spacing-spacing-32) w-full rounded-[10px]"
      />
    </div>
  );
}

function ZipcodeScreen() {
  const [zipcode, setZipcode] = useState("");

  return (
    <div className="flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-80) overflow-y-auto">
      <h2
        className="text-center text-(--color-neutral-900)"
        style={{
          fontFamily: typography.styles.h4.fontFamily,
          fontSize: typography.styles.h4.fontSize,
          fontWeight: typography.styles.h4.fontWeight,
          lineHeight: typography.styles.h4.lineHeight,
          letterSpacing: typography.styles.h4.letterSpacing,
        }}
      >
        Where will you be spending most of your time in the next 2 months?
      </h2>

      <p
        className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[340px]"
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        Knowing your location helps us formulate products that shield your hair and skin from environmental stressors.
      </p>

      <div className="flex flex-col gap-(--spacing-spacing-16) mt-(--spacing-spacing-32) w-full">
        {/* Country dropdown */}
        <div className="flex items-center w-full h-[56px] px-(--spacing-spacing-16) py-(--spacing-spacing-8) bg-(--color-neutral-100) border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_rgba(234,234,234,0.5)] rounded-none">
          <span
            className="flex-1 text-(--color-neutral-800)"
            style={{
              fontFamily: typography.styles.body3Regular.fontFamily,
              fontSize: typography.styles.body3Regular.fontSize,
              fontWeight: typography.styles.body3Regular.fontWeight,
              lineHeight: typography.styles.body3Regular.lineHeight,
              letterSpacing: typography.styles.body3Regular.letterSpacing,
            }}
          >
            United States of America
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-(--color-neutral-800)" aria-hidden="true">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Zip code input */}
        <div className="flex flex-col w-full bg-(--color-neutral-100) border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_rgba(234,234,234,0.5)] rounded-none">
          <div className="flex flex-col w-full px-(--spacing-spacing-16) py-(--spacing-spacing-8)">
            <label
              className="text-(--color-neutral-900)"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              Zip Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter zip code"
              className="w-full bg-transparent border-none outline-none text-(--color-neutral-800) placeholder:text-(--color-neutral-700)"
              style={{
                fontFamily: typography.styles.body3Regular.fontFamily,
                fontSize: typography.styles.body3Regular.fontSize,
                fontWeight: typography.styles.body3Regular.fontWeight,
                lineHeight: typography.styles.body3Regular.lineHeight,
                letterSpacing: typography.styles.body3Regular.letterSpacing,
              }}
            />
          </div>
          {zipcode && <div className="h-[2px] w-full bg-(--color-neutral-900)" />}
        </div>
      </div>

      <p
        className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-24) max-w-[340px]"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        This ZIP code will be used in both your hair and skincare consultation. For now, we only ship to the US & Canada.
      </p>
    </div>
  );
}

const GEO_METRICS = [
  { label: "UV RAYS", value: 24 },
  { label: "POLLUTION", value: 26 },
  { label: "WATER HARDNESS", value: 57 },
  { label: "HUMIDITY", value: 58 },
  { label: "WIND", value: 45 },
];

function GeoProgressBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center gap-(--spacing-spacing-8)">
      <span
        className="text-(--color-neutral-800)"
        style={{
          fontFamily: typography.styles.label2Regular.fontFamily,
          fontSize: typography.styles.label2Regular.fontSize,
          fontWeight: typography.styles.label2Regular.fontWeight,
          lineHeight: typography.styles.label2Regular.lineHeight,
          letterSpacing: typography.styles.label2Regular.letterSpacing,
          textTransform: "uppercase" as const,
        }}
      >
        {label}  {value}/100
      </span>
      <div className="w-full h-[6px] bg-(--color-neutral-400) rounded-full overflow-hidden">
        <div
          className="h-full bg-(--color-primary-300) rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function GeoAggressorsScreen() {
  return (
    <div className="flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-32) pb-(--spacing-spacing-80) overflow-y-auto">
      <h2
        className="text-center text-(--color-neutral-900)"
        style={{
          fontFamily: typography.styles.h4.fontFamily,
          fontSize: typography.styles.h4.fontSize,
          fontWeight: typography.styles.h4.fontWeight,
          lineHeight: typography.styles.h4.lineHeight,
          letterSpacing: typography.styles.h4.letterSpacing,
        }}
      >
        Here's what affects your hair in Brooklyn.
      </h2>

      <p
        className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-12) max-w-[340px]"
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        We'll tailor your custom formulas to combat these environmental stressors — for great hair regardless of the weather.
      </p>

      <div className="flex flex-col gap-(--spacing-spacing-24) mt-(--spacing-spacing-32) w-full">
        {GEO_METRICS.map((metric, i) => (
          <GeoProgressBar
            key={metric.label}
            label={metric.label}
            value={metric.value}
            delay={200 + i * 200}
          />
        ))}
      </div>
    </div>
  );
}

function SigninScreen() {
  const h3Style = {
    fontFamily: typography.styles.h3.fontFamily,
    fontSize: typography.styles.h3.fontSize,
    fontWeight: typography.styles.h3.fontWeight,
    lineHeight: typography.styles.h3.lineHeight,
    letterSpacing: typography.styles.h3.letterSpacing,
  };
  const body3Style = {
    fontFamily: typography.styles.body3Regular.fontFamily,
    fontSize: typography.styles.body3Regular.fontSize,
    fontWeight: typography.styles.body3Regular.fontWeight,
    lineHeight: typography.styles.body3Regular.lineHeight,
    letterSpacing: typography.styles.body3Regular.letterSpacing,
  };
  const body6Style = {
    fontFamily: typography.styles.body6Regular.fontFamily,
    fontSize: typography.styles.body6Regular.fontSize,
    fontWeight: typography.styles.body6Regular.fontWeight,
    lineHeight: typography.styles.body6Regular.lineHeight,
    letterSpacing: typography.styles.body6Regular.letterSpacing,
  };

  return (
    <div className="flex-1 flex flex-col pb-(--spacing-spacing-80) overflow-y-auto">
      {/* Hero image */}
      <img
        src={`${BASE}images/RTB4A.png`}
        alt=""
        className="w-full object-cover"
      />

      {/* Content */}
      <div className="px-(--spacing-spacing-24) mt-(--spacing-spacing-24)">
        <h2 className="text-(--color-neutral-900)" style={h3Style}>
          Clinically tested for concerns just like yours
        </h2>

        {/* Stat 1 */}
        <div className="border-t border-(--color-neutral-400) mt-(--spacing-spacing-24) pt-(--spacing-spacing-24)">
          <div className="flex items-center gap-(--spacing-spacing-16)">
            <span className="text-(--color-neutral-900) shrink-0" style={h3Style}>
              91%
            </span>
            <span className="text-(--color-neutral-800)" style={body3Style}>
              said Prose addressed{" "}
              <span className="bg-(--color-highlight-200)">all their hair and scalp concerns</span>*
            </span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="border-t border-(--color-neutral-400) mt-(--spacing-spacing-24) pt-(--spacing-spacing-24)">
          <div className="flex items-center gap-(--spacing-spacing-16)">
            <span className="text-(--color-neutral-900) shrink-0" style={h3Style}>
              3x
            </span>
            <span className="text-(--color-neutral-800)" style={body3Style}>
              <span className="bg-(--color-highlight-200)">stronger hair</span> and less breakage**
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="text-(--color-neutral-700) mt-(--spacing-spacing-32)"
          style={body6Style}
        >
          *Based on self-assessment in a 4-week, double-blind, controlled clinical study of 68 subjects who tested Prose Custom Shampoo + Conditioner 3 times a week [somewhat agree to strongly agree].
        </p>
      </div>
    </div>
  );
}

const RECOMMENDED_FRAGRANCES = [
  { name: "Corsica", category: "Fresh + Aquatic", notes: "Anjou Pear, Peony, Cedar Wood", image: `${BASE}images/fragrances/Prose-Hair-Fragrance-Corsica.png` },
  { name: "Prelude", category: "Floral + Fresh", notes: "Rose, Geranium, Blue Iris", image: `${BASE}images/fragrances/Prose-Hair-Fragrance-Prelude.png` },
  { name: "Meleni", category: "Fruity + Tropical", notes: "Mango, Melon, Lush Greens", image: `${BASE}images/fragrances/Prose-Hair-Fragrance-Meleni.png` },
];

const OTHER_FRAGRANCES = [
  { name: "Oasis", category: "Floral + Summery", notes: "Jasmine, Amber, White Peach", image: `${BASE}images/fragrances/Prose-Hair-Fragrance_Oasis.png` },
  { name: "Botanica", category: "Herbal + Aromatic", notes: "Eucalyptus, Rosemary, Lavender", image: `${BASE}images/fragrances/Prose-Hair-Fragrance-Botanica.png` },
  { name: "Arcadia", category: "Citrusy + Woody", notes: "Grapefruit, Basil, Cedar", image: `${BASE}images/fragrances/Prose-Hair-Fragrance-Arcadia.png` },
  { name: "Fragrance-Free", category: "", notes: "", image: "" },
];

function FragranceScreen() {
  const [selectedFragrance, setSelectedFragrance] = useState<string | null>(null);

  return (
    <div className="flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-80) overflow-y-auto">
      <h2
        className="text-center text-(--color-neutral-900)"
        style={{
          fontFamily: typography.styles.h4.fontFamily,
          fontSize: typography.styles.h4.fontSize,
          fontWeight: typography.styles.h4.fontWeight,
          lineHeight: typography.styles.h4.lineHeight,
          letterSpacing: typography.styles.h4.letterSpacing,
        }}
      >
        What haircare fragrance would you like?
      </h2>

      <p
        className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[340px]"
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        Please note that some of your custom products may feature a unique scent, tailored to the formulation.
      </p>

      <button className="flex items-center gap-(--spacing-spacing-8) mt-(--spacing-spacing-24) cursor-pointer bg-transparent border-none">
        <span className="text-(--color-tertiary-300) flex items-center justify-center w-[20px] h-[20px] rounded-full border border-(--color-tertiary-300) text-xs leading-none">
          +
        </span>
        <span
          className="text-(--color-neutral-800) underline"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            letterSpacing: typography.styles.body4Regular.letterSpacing,
          }}
        >
          Need help deciding?
        </span>
      </button>

      {/* Recommended */}
      <div
        className="mt-(--spacing-spacing-32) mb-(--spacing-spacing-16)"
        style={{
          fontFamily: typography.styles.label2Regular.fontFamily,
          fontSize: typography.styles.label2Regular.fontSize,
          fontWeight: typography.styles.label2Regular.fontWeight,
          lineHeight: typography.styles.label2Regular.lineHeight,
          letterSpacing: typography.styles.label2Regular.letterSpacing,
          textTransform: "uppercase" as const,
        }}
      >
        <span className="text-(--color-neutral-900)">Recommended Fragrances</span>
      </div>

      <div className="flex flex-col gap-(--spacing-spacing-12) w-full">
        {RECOMMENDED_FRAGRANCES.map((f) => (
          <Selector
            key={f.name}
            image={f.image}
            label={f.name}
            subcopy={`${f.category}\n${f.notes}`}
            selected={selectedFragrance === f.name}
            onClick={() => setSelectedFragrance(f.name)}
            size="mobile"
            className="w-full"
          />
        ))}
      </div>

      {/* Other */}
      <div
        className="mt-(--spacing-spacing-32) mb-(--spacing-spacing-16)"
        style={{
          fontFamily: typography.styles.label2Regular.fontFamily,
          fontSize: typography.styles.label2Regular.fontSize,
          fontWeight: typography.styles.label2Regular.fontWeight,
          lineHeight: typography.styles.label2Regular.lineHeight,
          letterSpacing: typography.styles.label2Regular.letterSpacing,
          textTransform: "uppercase" as const,
        }}
      >
        <span className="text-(--color-neutral-900)">Other Fragrances</span>
      </div>

      <div className="flex flex-col gap-(--spacing-spacing-12) w-full">
        {OTHER_FRAGRANCES.map((f) =>
          f.image ? (
            <Selector
              key={f.name}
              image={f.image}
              label={f.name}
              subcopy={f.category ? `${f.category}\n${f.notes}` : undefined}
              selected={selectedFragrance === f.name}
              onClick={() => setSelectedFragrance(f.name)}
              size="mobile"
              className="w-full"
            />
          ) : (
            <button
              key={f.name}
              type="button"
              onClick={() => setSelectedFragrance(f.name)}
              className={[
                "flex items-center rounded-[8px] overflow-clip w-full cursor-pointer transition-colors outline-none",
                selectedFragrance === f.name
                  ? "border border-(--color-primary-200)"
                  : "border border-(--color-neutral-300) hover:bg-(--color-neutral-300)",
              ].join(" ")}
            >
              <div className="h-[127px] w-[101px] shrink-0 flex items-center justify-center bg-(--color-neutral-100)">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-(--color-neutral-700)">
                  <rect x="14" y="8" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="16" y="4" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="4" y1="36" x2="36" y2="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div
                className={[
                  "flex flex-col items-start justify-center h-[127px] px-(--spacing-spacing-16) py-[30px] flex-1 min-w-0",
                  selectedFragrance === f.name ? "bg-(--color-primary-200)" : "bg-(--color-neutral-100)",
                ].join(" ")}
              >
                <span
                  className={selectedFragrance === f.name ? "text-(--color-neutral-900)" : "text-(--color-primary-400)"}
                  style={{
                    fontFamily: typography.styles.body4Regular.fontFamily,
                    fontSize: typography.styles.body4Regular.fontSize,
                    fontWeight: typography.styles.body4Regular.fontWeight,
                    lineHeight: typography.styles.body4Regular.lineHeight,
                    letterSpacing: typography.styles.body4Regular.letterSpacing,
                  }}
                >
                  {f.name}
                </span>
              </div>
            </button>
          )
        )}
      </div>
    </div>
  );
}

function PlaceholderContent({ screen }: { screen: PlaceholderScreen }) {
  if (screen.slug === "treatments-intro") {
    return <TreatmentsIntro />;
  }

  if (screen.slug === "lifestyle-intro") {
    return <LifestyleIntro />;
  }

  if (screen.slug === "zipcode") {
    return <ZipcodeScreen />;
  }

  if (screen.slug === "geo-aggressors") {
    return <GeoAggressorsScreen />;
  }

  if (screen.slug === "signin") {
    return <SigninScreen />;
  }

  if (screen.slug === "fragrance") {
    return <FragranceScreen />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-(--spacing-spacing-24) pb-(--spacing-spacing-80) text-center">
      <h2
        className="text-(--color-neutral-900)"
        style={{
          fontFamily: typography.styles.h4.fontFamily,
          fontSize: typography.styles.h4.fontSize,
          fontWeight: typography.styles.h4.fontWeight,
          lineHeight: typography.styles.h4.lineHeight,
          letterSpacing: typography.styles.h4.letterSpacing,
        }}
      >
        {screen.title}
      </h2>
      {screen.subtitle && (
        <p
          className="text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[340px]"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            letterSpacing: typography.styles.body4Regular.letterSpacing,
          }}
        >
          {screen.subtitle}
        </p>
      )}
      <div className="mt-(--spacing-spacing-48)">
        <span
          className="text-(--color-neutral-700)"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          Content coming soon
        </span>
      </div>
    </div>
  );
}

// ── Question screen ──────────────────────────────────────────────────────────

function QuestionContent({
  screen,
  selected,
  onSelect,
}: {
  screen: QuestionScreen;
  selected: Set<number>;
  onSelect: (index: number) => void;
}) {
  let lastGroup: string | undefined;
  const isHug = screen.selectorSize === "hug";

  return (
    <div className="flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-80) overflow-y-auto">
      <h2
        className="text-center text-(--color-neutral-900)"
        style={{
          fontFamily: typography.styles.h4.fontFamily,
          fontSize: typography.styles.h4.fontSize,
          fontWeight: typography.styles.h4.fontWeight,
          lineHeight: typography.styles.h4.lineHeight,
          letterSpacing: typography.styles.h4.letterSpacing,
        }}
      >
        {screen.heading}
      </h2>

      {screen.instruction && (
        <p
          className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[340px]"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            letterSpacing: typography.styles.body4Regular.letterSpacing,
          }}
        >
          {screen.instruction}
        </p>
      )}

      {screen.tipTitle && (
        <button className="flex items-center gap-(--spacing-spacing-8) mt-(--spacing-spacing-24) cursor-pointer bg-transparent border-none">
          <span className="text-(--color-tertiary-300) flex items-center justify-center w-[20px] h-[20px] rounded-full border border-(--color-tertiary-300) text-xs leading-none">
            +
          </span>
          <span
            className="text-(--color-neutral-800) underline"
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
            }}
          >
            {screen.tipTitle}
          </span>
        </button>
      )}

      <div className={`mt-(--spacing-spacing-32) w-full ${isHug ? "flex flex-wrap gap-(--spacing-spacing-8)" : "flex flex-col items-center gap-(--spacing-spacing-12)"}`}>
        {screen.options.map((opt, i) => {
          const showGroupHeader = opt.group && opt.group !== lastGroup;
          lastGroup = opt.group;

          return isHug ? (
            <div key={i} className="flex flex-wrap gap-(--spacing-spacing-8) items-start">
              {showGroupHeader && (
                <div
                  className="w-full mt-(--spacing-spacing-12) mb-(--spacing-spacing-4)"
                  style={{
                    fontFamily: typography.styles.label3Regular.fontFamily,
                    fontSize: typography.styles.label3Regular.fontSize,
                    fontWeight: typography.styles.label3Regular.fontWeight,
                    lineHeight: typography.styles.label3Regular.lineHeight,
                    letterSpacing: typography.styles.label3Regular.letterSpacing,
                    textTransform: "uppercase" as const,
                  }}
                >
                  <span className="text-(--color-neutral-700)">
                    {opt.group}
                  </span>
                </div>
              )}
              <Selector
                label={opt.label}
                subcopy={opt.subcopy}
                selected={selected.has(i)}
                onClick={() => onSelect(i)}
                size="hug"
              />
            </div>
          ) : (
            <div key={i} className="w-full flex flex-col items-center">
              {showGroupHeader && (
                <div
                  className="w-full text-left mt-(--spacing-spacing-16) mb-(--spacing-spacing-8)"
                  style={{
                    fontFamily: typography.styles.label3Regular.fontFamily,
                    fontSize: typography.styles.label3Regular.fontSize,
                    fontWeight: typography.styles.label3Regular.fontWeight,
                    lineHeight: typography.styles.label3Regular.lineHeight,
                    letterSpacing: typography.styles.label3Regular.letterSpacing,
                    textTransform: "uppercase" as const,
                  }}
                >
                  <span className="text-(--color-neutral-700)">
                    {opt.group}
                  </span>
                </div>
              )}
              <Selector
                label={opt.label}
                subcopy={opt.subcopy}
                selected={selected.has(i)}
                onClick={() => onSelect(i)}
                size="hug"
                className="w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function ConsultationPage() {
  const initialStep = Number(new URLSearchParams(window.location.search).get("step") || 0);
  const [step, setStep] = useState(initialStep);
  const [answers, setAnswers] = useState<Record<string, Set<number>>>({});

  const screen = screens[step];
  const isFirst = step === 0;
  const isLast = step === screens.length - 1;
  const isQuestion = screen.type === "question";
  const isMulti = isQuestion && screen.selectionType === "multi";
  const selected = answers[screen.slug] ?? new Set<number>();

  // Progress within current category
  const categoryScreens = screens.filter(
    (s) => s.category === screen.category
  );
  const categoryIndex = categoryScreens.indexOf(screen);
  const categoryProgress =
    categoryScreens.length > 1
      ? ((categoryIndex + 1) / categoryScreens.length) * 100
      : 100;

  const goNext = () => {
    if (!isLast) setStep(step + 1);
  };

  const goBack = () => {
    if (!isFirst) setStep(step - 1);
  };

  const handleSelect = (index: number) => {
    if (!isQuestion) return;

    if (isMulti) {
      const current = new Set(selected);
      if (current.has(index)) {
        current.delete(index);
      } else {
        current.add(index);
      }
      setAnswers({ ...answers, [screen.slug]: current });
    } else {
      // Single select — set answer and advance after brief delay
      setAnswers({ ...answers, [screen.slug]: new Set([index]) });
      if (!isLast) {
        setTimeout(() => setStep(step + 1), 250);
      }
    }
  };

  // Show NEXT for multi-select questions and all placeholders
  const showNextButton = !isQuestion || isMulti;

  return (
    <div className="min-h-dvh bg-(--color-neutral-200) flex flex-col max-w-[430px] mx-auto w-full">
      {/* Promo banner */}
      <div className="bg-(--color-primary-400) py-(--spacing-spacing-8) text-center">
        <a
          href="#"
          className="text-(--color-neutral-100) underline"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          Exclusive Welcome Offer: 60% off + free gift
        </a>
      </div>

      {/* Header */}
      <header className="flex items-center justify-center px-(--spacing-spacing-24) py-(--spacing-spacing-16) relative">
        <Logo variant="dark" height={18} />
        <button
          className="absolute right-(--spacing-spacing-24) text-(--color-neutral-900) cursor-pointer bg-transparent border-none"
          style={{
            fontFamily: typography.styles.body3Regular.fontFamily,
            fontSize: typography.styles.body3Regular.fontSize,
            fontWeight: typography.styles.body3Regular.fontWeight,
            lineHeight: typography.styles.body3Regular.lineHeight,
            letterSpacing: typography.styles.body3Regular.letterSpacing,
          }}
        >
          Exit
        </button>
      </header>

      {/* Progress bar */}
      <ProgressBar
        currentCategory={screen.category}
        progress={categoryProgress}
      />

      {/* Content */}
      {screen.type === "placeholder" ? (
        <PlaceholderContent screen={screen} />
      ) : (
        <QuestionContent
          screen={screen}
          selected={selected}
          onSelect={handleSelect}
        />
      )}

      {/* Bottom navigation — floats over content */}
      <footer className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto px-(--spacing-spacing-24) py-(--spacing-spacing-16) flex items-center gap-(--spacing-spacing-12) pointer-events-none box-border">
        {!isFirst && (
          <ButtonMini
            variant="back"
            color="light"
            floating={false}
            onClick={goBack}
            className="shrink-0 pointer-events-auto"
          />
        )}
        {showNextButton && (
          <Button
            variant="primary-light"
            size="flexible"
            className="flex-1 min-w-0 !max-w-none pointer-events-auto"
            onClick={goNext}
            disabled={isMulti && selected.size === 0}
          >
            Next
          </Button>
        )}
      </footer>
    </div>
  );
}
