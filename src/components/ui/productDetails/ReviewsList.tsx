// dependencies
import { type FC } from "react";
import { Star } from "lucide-react";
// controller
import useSlices from "../../../hooks/useSlices";
// interface/@types
type productIDtype = {
  productID: string;
};
// components
import Typography from "../../typography";

// main
const ReviewsList: FC<productIDtype> = ({ productID }) => {
  // state
  const { data } = useSlices("productController");
  // Grab reviews from Redux so they persist per product
  const reviews = data.reviews.filter((r) => r.id === productID);

  return (
    <div className="w-full lg:w-2/3 space-y-8">
      {reviews.length === 0 ? (
        <Typography className="text-[#395B64] italic">
          No reviews yet. Be the first to review!
        </Typography>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="bg-[#E7F6F2]/50 p-6 rounded-3xl">
            {/* Author row with avatar */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#395B64] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3333]">{review.author}</h4>
                  <p className="text-sm text-[#A5C9CA]">{review.date}</p>
                </div>
              </div>
              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-amber-500 text-amber-500" : "fill-[#E7F6F2] text-[#A5C9CA]"}`}
                  />
                ))}
              </div>
            </div>
            {/* Review text */}
            <Typography className="text-[#395B64] text-md leading-relaxed">
              {review.text}
            </Typography>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewsList;
