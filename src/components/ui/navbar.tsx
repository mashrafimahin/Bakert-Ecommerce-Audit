// dependencies
import { type FC, useState } from "react";
import { Link, useLocation } from "react-router";
// controller
import useSlices from "../../hooks/useSlices";
import { handlePopup } from "../../app/features/globalController";
// icons
import { ShoppingBag, User, Menu, X, CakeSlice } from "lucide-react";
// data
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

// main
const Navbar: FC = () => {
  // state
  const { data, dispatch } = useSlices("globalController");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // handle popup
  const handleClick = (): void => {
    dispatch(handlePopup());
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#A5C9CA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-[#395B64]">
            <CakeSlice className="h-8 w-8" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2C3333]">
              Bakert
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-md font-bold transition-colors hover:text-[#395B64] ${
                  location.pathname === link.path
                    ? "text-[#395B64]"
                    : "text-[#2C3333]/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="p-2 text-[#2C3333]/80 hover:text-[#395B64] transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={handleClick}
              className="p-2 text-[#2C3333]/80 hover:text-[#395B64] transition-colors relative cursor-pointer"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-[#395B64] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {data.cartCount || 0}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 text-[#2C3333] relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-[#395B64] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#2C3333]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#A5C9CA]/30 overflow-hidden absolute w-full left-0 z-40 shadow-xl">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#2C3333] font-bold px-2 py-2 border-b border-[#E7F6F2]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#395B64] font-bold px-2 py-2 flex items-center gap-2"
              >
                <User className="h-4 w-4" /> Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
