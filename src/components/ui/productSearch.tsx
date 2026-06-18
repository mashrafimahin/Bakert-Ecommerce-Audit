// dependencies
import { type FC, useState, useRef } from "react";
// interface/@types
// utilities
// icons
import { Search } from "lucide-react";
import Typography from "../typography";
// components
// layouts
// data
import useSlices from "../../hooks/useSlices";
import { setSearchQuery } from "../../app/features/productController";

// main
const ProductSearch: FC = () => {
  // state
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useSlices("productController");

  // ref for debounce timer
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // handle search value
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // immediate UI update

    // debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      dispatch(setSearchQuery(value.trim()));
    }, 900);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#A5C9CA]/30">
      {/* text */}
      <Typography variant="subHead" className="mb-0 ml-2">
        Our Delights
      </Typography>

      {/* search bar */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A5C9CA] w-5 h-5" />
          <input
            type="text"
            placeholder="Search treats..."
            value={inputValue}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-3 bg-[#E7F6F2] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#395B64] text-sm font-medium text-[#2C3333] placeholder:text-[#395B64]/50"
          />
        </div>
      </div>
    </div>
  );
};

// exports
export default ProductSearch;
