// dependencies
import { useState, type FC } from "react";
import { Star, Send } from "lucide-react";
// interface/@types
type productIDtype = {
  productID: string;
};
// utilities
import { cn } from "../../../utils/ClassMerger";
// controller
import type { Review } from "../../../app/features/productController";
import { addReview } from "../../../app/features/productController";
import { postNewReview } from "../../../handlers/toggleHandler";
import { handleNotification } from "../../../app/features/globalController";
// components
import Typography from "../../typography";
import Button from "../button";
import useSlices from "../../../hooks/useSlices";

// main
const ReviewForm: FC<productIDtype> = ({ productID }) => {
  // state
  const { dispatch: notification } = useSlices("globalController");
  const { dispatch } = useSlices("productController");
  const { data: user } = useSlices("authController");
  const user_name = `${user.profileData.firstName} ${user.profileData.lastName}`;
  // Local UI state
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [sending, setSending] = useState<boolean>(false);

  // Event handlers
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // checking
    if (!newReviewText.trim()) return;
    // loading
    setSending(true);
    // modify info
    const review: Review = {
      productId: productID,
      author: user_name,
      rating: newRating,
      text: newReviewText,
    };
    // save data through api
    postNewReview(review);
    // timeout
    setTimeout(() => {
      // add review to the top-level reviews array
      notification(
        handleNotification({ type: "success", message: "Review posted." }),
      );
      dispatch(addReview({ productId: productID, review }));
      // Reset form
      setNewReviewText("");
      setNewRating(5);
      setSending(false);
    }, 800);
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-[#E7F6F2] p-8 rounded-2xl sticky top-28">
        <Typography variant="subHead" className="text-2xl font-bold">
          Write a Review
        </Typography>

        {/* form */}
        <form onSubmit={handleSubmitReview} className="space-y-6">
          {/* Star rating picker */}
          <div>
            <label className="block text-sm font-bold text-[#395B64] mb-3">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${star <= newRating ? "fill-amber-500 text-amber-500" : "fill-white text-[#A5C9CA]"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review text area */}
          <div>
            <label className="block text-sm font-bold text-[#395B64] mb-3">
              Your Comment
            </label>
            <textarea
              rows={4}
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              placeholder="What did you love about it?"
              className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#395B64] text-[#2C3333] resize-none bg-white font-medium"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <Button
            variant="primary"
            type="submit"
            className={cn("flex items-center", sending ? "cursor-no-drop" : "")}
            disabled={sending}
          >
            {sending ? (
              <>
                Posting
                <div className="ml-2 h-3 w-3 animate-spin rounded-full border-4 border-white border-t-transparent" />
              </>
            ) : (
              <>
                Post Review <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
