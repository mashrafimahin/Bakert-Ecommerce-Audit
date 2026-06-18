// dependencies
import type { FC } from "react";
// utilities
import { cn } from "../../utils/ClassMerger";
// icon
import { Package, Heart, Settings, LogOut } from "lucide-react";
// components
import Typography from "../typography";
// data
const viewButtons = [
  {
    title: "Order History",
    page: "",
    icon: <Package className="w-5 h-5" />,
  },
  {
    title: "Favorites",
    page: "",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Order History",
    page: "Settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

// main
const DashboardSide: FC = () => {
  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="bg-white rounded-xl p-6 border border-[#A5C9CA]/30 shadow-sm sticky top-28">
        {/* heading */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#E7F6F2]">
          <div className="w-14 h-14 bg-[#E7F6F2] rounded-full flex items-center justify-center text-[#395B64] font-bold text-2xl">
            J
          </div>
          <div>
            <Typography
              variant="subHead"
              className="font-bold text-[#2C3333] text-lg mb-0"
            >
              Jane Doe
            </Typography>
            <Typography className="text-sm font-medium text-[#A5C9CA]">
              jane@example.com
            </Typography>
          </div>
        </div>

        {/* nav buttons */}
        <nav className="space-y-2">
          {viewButtons.map((item, i) => (
            <span
              key={i}
              className={cn(
                "flex items-center gap-3 px-5 py-4 bg-[#395B64] text-white rounded-xl font-bold shadow-md shadow-[#395B64]/20 cursor-pointer",
              )}
            >
              {item.icon} {item.title}
            </span>
          ))}

          {/* separate */}
          <div className="pt-4 mt-4 border-t border-[#E7F6F2]">
            <span className="flex items-center gap-3 px-5 py-4 text-[#A5C9CA] hover:text-red-500 hover:bg-red-50 rounded-xl font-bold transition-colors cursor-pointer">
              <LogOut className="w-5 h-5" /> Sign Out
            </span>
          </div>
        </nav>
      </div>
    </aside>
  );
};

// exports
export default DashboardSide;
