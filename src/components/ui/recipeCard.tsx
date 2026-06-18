// dependencies
import { useState, type FC } from "react";
import { useNavigate } from "react-router";
// controller
import useSlices from "../../hooks/useSlices";
import { handleAddCart } from "../../app/features/globalController";
// interface/@types
interface RecipeType {
  recipe: {
    id: string;
    image: string;
    price: number;
    name: string;
  };
}
// icons
import { CheckCheck } from "lucide-react";
// components
import Button from "./button";

// main
const RecipeCard: FC<RecipeType> = ({ recipe }) => {
  // state
  const { dispatch } = useSlices("globalController");
  const [btnState, setBtnState] = useState<boolean>(false);
  const navigate = useNavigate();

  // handle add
  const handleAdd = (): void => {
    setBtnState(true);
    dispatch(handleAddCart({ ...recipe, quantity: 1 }));
    setTimeout(() => {
      setBtnState(false);
    }, 1000);
  };

  return (
    <div
      key={recipe.id}
      className="group bg-[#2C3333] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 relative text-white cursor-pointer"
      onClick={() => navigate(`/product/${recipe.id}`)}
    >
      <div className="absolute top-4 right-4 bg-[#A5C9CA] text-[#2C3333] text-xs font-black px-4 py-1.5 rounded-full z-10 tracking-wide">
        DIGITAL RECIPE
      </div>
      <div className="relative aspect-4/3 overflow-hidden opacity-70">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-[#2C3333] via-[#2C3333]/60 to-transparent flex flex-col justify-end p-6">
        <h3 className="font-bold text-2xl leading-tight mb-2 text-[#E7F6F2]">
          {recipe.name}
        </h3>
        <p className="text-sm text-[#A5C9CA] font-medium mb-6">
          Difficulty: Inter
        </p>
        <div className="flex justify-between items-center gap-4">
          <span className="font-black text-2xl text-[#E7F6F2]">
            ${recipe.price.toFixed(2)}
          </span>
          <div onClick={(e) => e.stopPropagation()}>
            <Button variant="secondary" buttonHandler={handleAdd}>
              {btnState ? (
                <>
                  <CheckCheck size={20} className="text-green-400" />
                  &nbsp; Added
                </>
              ) : (
                "Buy Recipe"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// exports
export default RecipeCard;
