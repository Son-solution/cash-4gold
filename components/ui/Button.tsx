"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRESS, TRANSITION } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  gold: "bg-gold text-ink shadow-gold hover:bg-gold-hover hover:shadow-gold-lg",
  outline: "border border-line-strong bg-white text-ink hover:border-gold",
  white: "border border-line-2 bg-white text-ink hover:border-gold",
  ghost: "text-ink hover:text-gold-ink",
};

const SIZES: Record<Size, string> = {
  sm: "h-11 px-5 text-[14px]",
  md: "h-[52px] px-6 text-[15px]",
  lg: "h-[62px] px-8 text-[16px]",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Leading icon. */
  icon?: IconName;
  /** Trailing arrow that nudges right on hover. */
  arrow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: () => void;
  type?: never;
  disabled?: never;
  ariaLabel?: string;
}

interface ActionProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

/** Premium CTA button / link with Framer hover + tap micro-interactions. */
export function Button(props: LinkProps | ActionProps) {
  const { children, variant = "gold", size = "md", icon, arrow, fullWidth, className, ariaLabel } = props;
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap",
    "transition-[background-color,border-color,box-shadow,color] duration-200 ease-out-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:cursor-not-allowed disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {icon && <Icon name={icon} size={17} className={variant === "gold" ? "" : "text-gold-ink"} />}
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow-right"
          size={18}
          strokeWidth={1.8}
          className="transition-transform duration-200 ease-out-soft group-hover:translate-x-[3px]"
        />
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <m.a href={props.href} onClick={props.onClick} className={classes} whileTap={PRESS} transition={TRANSITION.fast} aria-label={ariaLabel}>
        {content}
      </m.a>
    );
  }

  return (
    <m.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      whileTap={props.disabled ? undefined : PRESS}
      transition={TRANSITION.fast}
      aria-label={ariaLabel}
    >
      {content}
    </m.button>
  );
}
