import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-neutral-800/60 border border-neutral-800 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
};

export function CardContent({ children, className = "", ...rest }: CardContentProps) {
  return (
    <div className={`p-4 sm:p-6 ${className}`} {...rest}>
      {children}
    </div>
  );
}
