// dependencies
import { type FC, useState } from "react";
// interface/@types
// utilities
// icons
// components
import Typography from "../typography";
// layouts
// data
const CATEGORIES = [
  "All",
  "Cakes",
  "Cupcakes",
  "Pastries",
  "Wedding",
  "Recipes",
];

// main
const Sidebar: FC = () => {
  // state
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-28 space-y-8 bg-white p-6 rounded-3xl shadow-sm border border-[#A5C9CA]/30">
        <div>
          <Typography
            variant="subHead"
            className="text-xl font-serif font-bold text-[#2C3333] mb-5"
          >
            Categories
          </Typography>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#395B64] text-white shadow-md shadow-[#395B64]/20"
                      : "text-[#395B64] hover:bg-[#E7F6F2]"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

// exports
export default Sidebar;
