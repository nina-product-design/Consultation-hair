/*
 * ButtonMini — Figma: Design System Foundations > Buttons > Button/Mini
 *
 * 44×44px circular button with icon.
 * Variants: "back" (left arrow) or "add" (plus)
 * Color: "light" (primary/400 bg, white icon) or "dark" (neutral/200 bg, dark icon)
 * Floating: optional shadow
 */

export type ButtonMiniVariant = "back" | "add";
export type ButtonMiniColor = "light" | "dark";

type ButtonMiniProps = {
  variant?: ButtonMiniVariant;
  color?: ButtonMiniColor;
  floating?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function ArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const bgClasses: Record<ButtonMiniColor, string> = {
  light: "bg-(--color-primary-400) text-(--color-neutral-100)",
  dark:  "bg-(--color-neutral-200) text-(--color-primary-400)",
};

export function ButtonMini({
  variant = "back",
  color = "light",
  floating = true,
  onClick,
  className = "",
}: ButtonMiniProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center justify-center size-[44px] rounded-full cursor-pointer",
        bgClasses[color],
        floating ? "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {variant === "back" ? <ArrowIcon /> : <PlusIcon />}
    </button>
  );
}
