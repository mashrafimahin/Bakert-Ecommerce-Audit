// dependencies
import type { FC } from "react";
// interface/@types
type InputType = {
  label?: boolean;
  labelBody?: string;
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  mainValue?: string | number;
  changeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};
// utilities
import { cn } from "../../utils/ClassMerger";

// main
const InputBox: FC<InputType> = ({
  label,
  labelBody,
  id,
  name,
  type,
  placeholder,
  mainValue,
  changeFunc,
  className,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="name"
          className="block text-sm font-bold text-[#2C3333] mb-2"
        >
          {labelBody}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={mainValue}
        onChange={(e) => changeFunc?.(e)}
        className={cn(
          "appearance-none relative block w-full px-5 py-4 border-none bg-[#E7F6F2] text-[#2C3333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#395B64] sm:text-sm font-medium",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

// exports
export default InputBox;
