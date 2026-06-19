// dependencies
import type { FC } from "react";
import { Link } from "react-router";
// icons
import { CakeSlice } from "lucide-react";

// main
const Footer: FC = () => {
  return (
    <footer className="bg-[#2C3333] text-[#E7F6F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* left details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <CakeSlice className="h-6 w-6 text-[#A5C9CA]" />
              <span className="font-serif text-xl font-bold">Bakert</span>
            </div>
            <p className="text-sm text-[#A5C9CA]">
              Baking joy into every moment. We deliver freshly baked cakes,
              pastries, and premium recipes directly to your home.
            </p>
          </div>
          {/* lists */}
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-[#A5C9CA]">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Cakes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Wedding Cakes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Cupcakes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Digital Recipes
                </Link>
              </li>
            </ul>
          </div>
          {/* lists */}
          <div>
            <h4 className="text-white font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-[#A5C9CA]">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          {/* lists */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-[#A5C9CA] mb-4">
              Subscribe for sweet offers and new recipes!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#395B64]/50 text-white px-3 py-2 rounded-lg w-full border border-[#395B64] focus:outline-none focus:border-[#A5C9CA]"
              />
              <button className="bg-[#A5C9CA] hover:bg-[#E7F6F2] text-[#2C3333] font-bold px-4 py-2 rounded-lg transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
        {/* down area */}
        <div className="mt-16 pt-8 border-t border-[#395B64] text-sm text-[#A5C9CA] flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 Bakert. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">
              <Link to="/privacy&policy">Privacy Policy</Link>
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              <Link to="/terms&conditions">Terms of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
