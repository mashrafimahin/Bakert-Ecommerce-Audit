// dependencies
import type { FC } from "react";
import { Link } from "react-router-dom";
// utilities
import { cn } from "../../utils/ClassMerger";
import type React from "react";
// interface/@types
type ButtonType = {
  variant: keyof typeof pattern;
  link?: string;
  buttonHandler?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: React.ReactNode;
};
// pattern
const pattern = {
  primary:
    "group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-[#395B64] hover:bg-[#2C3333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#395B64] transition-colors shadow-lg shadow-[#395B64]/20 cursor-pointer",
  secondary:
    "group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-[#395B64] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#395B64] transition-colors shadow-lg shadow-white/20 cursor-pointer",
  link: "text-[#395B64] hover:text-[#2C3333] font-medium transition-colors cursor-pointer",
};

// main
const Button: FC<ButtonType> = ({
  variant,
  link,
  buttonHandler,
  className,
  children,
  type = "button",
}) => {
  return (
    <>
      {variant === "link" ? (
        <Link to={`/${link}`}>
          <button
            type={type}
            onClick={() => buttonHandler?.()}
            className={cn(pattern[variant], className)}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          onClick={() => buttonHandler?.()}
          className={cn(pattern[variant], className)}
        >
          {children}
        </button>
      )}
    </>
  );
};

// exports
export default Button;
