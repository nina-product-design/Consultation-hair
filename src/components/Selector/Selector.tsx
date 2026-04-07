import { typography } from "../../tokens";

/*
 * Selector — Figma: Design System Foundations > Consultation Selectors
 *
 * Two forms:
 *   1. Text pill (Image=False) — rounded pill with text, optional subcopy
 *   2. Image card (Image=True) — image on left, text on right, optional subcopy
 *
 * States:
 *   deselected — white bg, 1px border neutral/300
 *   selected   — primary/200 bg (light green), text neutral/900
 *
 * Sizes (text pill):
 *   fixed — 327px wide, px-32
 *   hug   — auto width (w-fit), px-12
 *
 * Sizes (image card):
 *   mobile  — 327px total (101px image + 226px text)
 *   desktop — 368px total (101px image + 267px text)
 *
 * All class strings are STATIC LITERALS.
 */

export type SelectorSize = "fixed" | "hug" | "mobile" | "desktop";

type SelectorProps = {
  selected?: boolean;
  subcopy?: string;
  label?: string;
  /** Image URL for card variant. When provided, renders as image card. */
  image?: string;
  size?: SelectorSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

// ─── Token refs for ComponentLibrary ─────────────────────────────────────────

export const stateTokens = {
  deselected: { bg: "color/neutral/100", border: "color/neutral/300", text: "color/primary/400" },
  selected:   { bg: "color/primary/200", border: "color/primary/200", text: "color/neutral/900" },
};

// ─── Text pill sizes ─────────────────────────────────────────────────────────

const pillSizeClasses: Record<"fixed" | "hug", string> = {
  fixed: "w-[327px] px-(--spacing-spacing-32)",
  hug:   "w-fit px-(--spacing-spacing-12)",
};

// ─── Image card text-side widths ─────────────────────────────────────────────

const cardTextWidths: Record<"mobile" | "desktop", string> = {
  mobile:  "w-[226px]",
  desktop: "w-[267px]",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Selector({
  selected = false,
  subcopy,
  label = "Once or twice a week",
  image,
  size = "fixed",
  onClick,
  className = "",
}: SelectorProps) {
  const isImageCard = !!image;

  // ── Image card variant ──────────────────────────────────────────────────
  if (isImageCard) {
    const cardSize = size === "desktop" ? "desktop" : "mobile";
    const totalWidth = cardSize === "desktop" ? "w-[368px]" : "w-[327px]";

    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          "flex items-center rounded-[8px] overflow-clip cursor-pointer transition-colors outline-none",
          selected
            ? "border border-(--color-primary-200)"
            : "border border-(--color-neutral-300) hover:bg-(--color-neutral-300)",
          totalWidth,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Image */}
        <div className="h-[127px] w-[101px] shrink-0 relative overflow-hidden rounded-l-(--radius-radius-10)">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div
          className={[
            "flex flex-col items-start justify-center h-[127px] px-(--spacing-spacing-16) py-[30px] flex-1 min-w-0",
            "rounded-r-(--radius-radius-10)",
            selected ? "bg-(--color-primary-200)" : "bg-(--color-neutral-100)",
          ].join(" ")}
        >
          <span
            className={selected ? "text-(--color-neutral-900)" : "text-(--color-primary-400)"}
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
              textAlign: "left",
            }}
          >
            {label}
          </span>
          {subcopy && (
            <span
              className={selected ? "text-(--color-neutral-900)" : "text-(--color-neutral-800)"}
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
                textAlign: "left",
                whiteSpace: "pre-line",
              }}
            >
              {subcopy}
            </span>
          )}
        </div>
      </button>
    );
  }

  // ── Text pill variant ───────────────────────────────────────────────────
  const pillSize = size === "hug" ? "hug" : "fixed";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-col items-start justify-center py-[16px] rounded-[10px] overflow-clip text-left cursor-pointer transition-colors outline-none",
        pillSizeClasses[pillSize],
        selected
          ? "bg-(--color-primary-200) border border-(--color-primary-200)"
          : "bg-(--color-neutral-100) border border-(--color-neutral-300) hover:bg-(--color-neutral-300)",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={selected ? "text-(--color-neutral-900)" : "text-(--color-primary-400)"}
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        {label}
      </span>
      {subcopy && (
        <span
          className={selected ? "text-(--color-neutral-900)" : "text-(--color-neutral-800)"}
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {subcopy}
        </span>
      )}
    </button>
  );
}
