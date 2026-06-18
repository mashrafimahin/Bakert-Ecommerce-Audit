// dependencies
import { cn } from "../../utils/ClassMerger";

// types
type InputTypes = {
  variant?: keyof typeof pattern;
  className?: string;
  children: React.ReactNode;
};

// pattern
const pattern = {
  head: "text-3xl md:text-5xl font-serif font-bold text-[#2C3333] mb-4",
  subHead: "text-3xl font-serif font-bold text-[#2C3333] mb-2",
  para: "text-[#395B64] max-w-2xl mx-auto text-lg",
};

// main
const Typography = ({ variant, className, children }: InputTypes) => {
  if (variant === "head" || variant === "subHead") {
    return <h2 className={cn(pattern[variant], className)}>{children}</h2>;
  } else {
    return <p className={cn(pattern.para, className)}>{children}</p>;
  }
};

// exports
export default Typography;
