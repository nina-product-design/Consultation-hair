import { typography } from "../../tokens";

/*
 * Button — Figma: Design System Foundations
 *
 * Shape   : rounded-full (9999px pill)
 * Font    : label/2 medium — Simplon Mono, uppercase, tracking-[0.96px]
 * Sizes   : "fixed" → min-w-[327px]  |  "flexible" → w-fit max-w-[327px]
 *
 * All variant × state class strings are STATIC LITERALS so Tailwind v4's
 * scanner emits every rule. No dynamic class construction.
 */

export type ButtonVariant =
  | "primary-light"
  | "primary-dark"
  | "secondary-light"
  | "secondary-dark"
  | "accent"
  | "destructive";

export type ButtonSize = "fixed" | "flexible";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adds drop shadow — applies to primary and accent */
  floating?: boolean;
  disabled?: boolean;
  loading?: boolean;
  /** Icon-only mode: renders icon without label wrapper, uses equal w/h */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
};

// ─── State class maps ──────────────────────────────────────────────────────────
// Exported so ComponentLibrary can render static hover/disabled previews
// without relying on CSS pseudo-class activation.

export const stateClasses: Record<
  ButtonVariant,
  { default: string; hover: string; disabled: string }
> = {
  "primary-light": {
    default:  "bg-(--color-primary-400) text-(--color-neutral-100)",
    hover:    "bg-(--color-primary-300) text-(--color-neutral-100)",
    disabled: "bg-(--color-neutral-700) text-(--color-neutral-100)",
  },
  "primary-dark": {
    default:  "bg-(--color-neutral-100) text-(--color-primary-400)",
    hover:    "bg-(--color-primary-100) text-(--color-primary-400)",
    disabled: "bg-(--color-neutral-700) text-(--color-neutral-100)",
  },
  "secondary-light": {
    default:  "bg-transparent border border-(--color-primary-400) text-(--color-primary-400)",
    hover:    "bg-(--color-primary-400) border border-(--color-primary-400) text-(--color-neutral-100)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
  "secondary-dark": {
    default:  "bg-transparent border border-(--color-neutral-100) text-(--color-neutral-100)",
    hover:    "bg-(--color-neutral-100) border border-(--color-neutral-100) text-(--color-primary-400)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
  accent: {
    default:  "bg-(--color-accent-200) text-(--color-neutral-100)",
    hover:    "bg-(--color-accent-300) text-(--color-neutral-100)",
    disabled: "bg-(--color-neutral-700) text-(--color-neutral-100)",
  },
  destructive: {
    default:  "bg-transparent border border-(--color-error-200) text-(--color-error-200)",
    hover:    "bg-(--color-error-200) border border-(--color-error-200) text-(--color-neutral-100)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
};

// ─── Interactive variant classes (with Tailwind pseudo-class modifiers) ────────

const variantClasses: Record<ButtonVariant, string> = {
  "primary-light":
    "bg-(--color-primary-400) text-(--color-neutral-100) " +
    "hover:bg-(--color-primary-300) " +
    "disabled:bg-(--color-neutral-700) disabled:text-(--color-neutral-100) disabled:opacity-100",

  "primary-dark":
    "bg-(--color-neutral-100) text-(--color-primary-400) " +
    "hover:bg-(--color-primary-100) " +
    "disabled:bg-(--color-neutral-700) disabled:text-(--color-neutral-100) disabled:opacity-100",

  "secondary-light":
    "bg-transparent border border-(--color-primary-400) text-(--color-primary-400) " +
    "hover:bg-(--color-primary-400) hover:text-(--color-neutral-100) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",

  "secondary-dark":
    "bg-transparent border border-(--color-neutral-100) text-(--color-neutral-100) " +
    "hover:bg-(--color-neutral-100) hover:text-(--color-primary-400) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",

  accent:
    "bg-(--color-accent-200) text-(--color-neutral-100) " +
    "hover:bg-(--color-accent-300) " +
    "disabled:bg-(--color-neutral-700) disabled:text-(--color-neutral-100) disabled:opacity-100",

  destructive:
    "bg-transparent border border-(--color-error-200) text-(--color-error-200) " +
    "hover:bg-(--color-error-200) hover:text-(--color-neutral-100) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",
};

// ─── Token references for ComponentLibrary documentation ──────────────────────

export const variantTokens: Record<
  ButtonVariant,
  { bg?: string; border?: string; text: string; hoverBg: string }
> = {
  "primary-light":   { bg: "color/primary/400",   text: "color/neutral/100",  hoverBg: "color/primary/300" },
  "primary-dark":    { bg: "color/neutral/100",    text: "color/primary/400",  hoverBg: "color/primary/100" },
  "secondary-light": { border: "color/primary/400", text: "color/primary/400", hoverBg: "color/primary/400" },
  "secondary-dark":  { border: "color/neutral/100", text: "color/neutral/100", hoverBg: "color/neutral/100" },
  accent:            { bg: "color/accent/200",     text: "color/neutral/100",  hoverBg: "color/accent/300" },
  destructive:       { border: "color/error/200",  text: "color/error/200",    hoverBg: "color/error/200" },
};

// Shadow value used for floating variants
const floatingShadow = "shadow-[0_4px_24px_rgba(50,52,41,0.20)]";

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  variant = "primary-light",
  size = "fixed",
  floating = false,
  disabled = false,
  loading = false,
  icon,
  children = "Get your formula",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const isIcon = !!icon;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        isIcon
          ? "w-[52px] h-[52px] p-0"
          : "h-[44px] px-(--spacing-spacing-32) py-[14px]",
        // Full pill / circle
        "rounded-full",
        "cursor-pointer",
        "transition-colors duration-150 ease-out",
        // Size (text buttons only)
        isIcon ? "" : size === "fixed" ? "min-w-[327px]" : "w-fit max-w-[327px]",
        // Floating elevation
        floating ? floatingShadow : "",
        // Appearance + hover + disabled
        variantClasses[variant],
        // Cursor when non-interactive
        isDisabled ? "cursor-not-allowed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? (
        <Spinner />
      ) : isIcon ? (
        icon
      ) : (
        <span
          style={{
            fontFamily: typography.label2Medium.fontFamily,
            fontSize: typography.label2Medium.fontSize,
            fontWeight: typography.label2Medium.fontWeight,
            lineHeight: typography.label2Medium.lineHeight,
            letterSpacing: typography.label2Medium.letterSpacing,
            textTransform: "uppercase",
          }}
          className="text-center flex-1 min-w-0"
        >
          {children}
        </span>
      )}
    </button>
  );
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-[18px] w-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
