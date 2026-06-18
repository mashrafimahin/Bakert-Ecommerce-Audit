// dependencies
import { useState, type FC } from "react";
import { Star, Send } from "lucide-react";
// interface/@types
interface ReviewFormProps {
  newReviewText: string;
  newRating: number;
  onTextChange: (text: string) => void;
  onRatingChange: (rating: number) => void;
  onSubmit: (e: React.FormEvent) => void;
}
// components
import Typography from "../../typography";
import Button from "../button";
import { cn } from "../../../utils/ClassMerger";

// main
const ReviewForm: FC<ReviewFormProps> = ({
  newReviewText,
  newRating,
  onTextChange,
  onRatingChange,
  onSubmit,
}) => {
  // state
  const [sending, setSending] = useState<boolean>(false);

  // handle button
  const handleButton = (): void => {
    setSending(true);
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-[#E7F6F2] p-8 rounded-2xl sticky top-28">
        <Typography variant="subHead" className="text-2xl font-bold">
          Write a Review
        </Typography>

        {/* form */}
        <form onSubmit={onSubmit} className="space-y-6">
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
                  onClick={() => onRatingChange(star)}
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
              onChange={(e) => onTextChange(e.target.value)}
              placeholder="What did you love about it?"
              className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#395B64] text-[#2C3333] resize-none bg-white font-medium"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <Button
            variant="primary"
            buttonHandler={() => {
              handleButton();
            }}
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
