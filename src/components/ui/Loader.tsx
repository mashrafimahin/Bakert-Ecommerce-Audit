// dependencies
import type { FC } from "react";

// main
const Loader: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center z-60">
      <div className="w-12 h-12 border-4 border-t-[#395B64] border-gray-300 rounded-full animate-spin" />
    </div>
  );
};

// exports
export default Loader;
