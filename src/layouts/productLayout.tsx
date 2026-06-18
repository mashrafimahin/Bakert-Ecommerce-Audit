// dependencies
import { useState, type FC, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
// icons
import { Star } from "lucide-react";
// Redux controller
import useSlices from "../hooks/useSlices";
import { productThunk, addReview } from "../app/features/productController";
import type { Review } from "../app/features/productController";
import { handleAddCart } from "../app/features/globalController";
// components
import Typography from "../components/typography";
import Button from "../components/ui/button";
import {
  ProductImage,
  ProductInfo,
  ProductActions,
  ReviewsList,
  ReviewForm,
} from "../components/ui/productDetails";

// main
const ProductDetails: FC = () => {
  // Route params & navigation
  const { id } = useParams();
  const navigate = useNavigate();
  // Local UI state
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  // Review form state
  const [newReviewText, setNewReviewText] = useState("");
  const [newRating, setNewRating] = useState(5);
  // Redux state
  const { data, dispatch } = useSlices("productController");

  // Fetch products from the API/handler if the store is empty
  useEffect(() => {
    if (data.allProducts.length === 0) {
      dispatch(productThunk());
    }
  }, [dispatch, data.allProducts.length]);

  // Locate the current product in the Redux store by route ID
  const item = data.allProducts.find((p) => p.id === id);

  // handle Route
  const handleRoute = (): void => {
    navigate("/shop");
  };

  // Fallback: product not found
  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-[#E7F6F2]">
        <Typography variant="subHead" className="text-3xl">
          Product Not Found
        </Typography>
        <Typography className="text-[#395B64] text-md font-semibold mb-8">
          We couldn't find the sweet treat you're looking for.
        </Typography>
        <Button
          variant="primary"
          buttonHandler={handleRoute}
          className="w-auto px-8"
        >
          Back to Shop
        </Button>
      </div>
    );
  }

  // Determine if this item is a digital recipe
  const isRecipe = item.category === "recipe";

  // Event handlers
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const review: Review = {
      id: Date.now(),
      author: "Jane Doe",
      rating: newRating,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      text: newReviewText,
    };

    // attached to this product's reviewsList
    dispatch(addReview({ productId: item.id, review }));

    // Reset form
    setNewReviewText("");
    setNewRating(5);
  };

  // Add to the cart
  const handleAddToCart = () => {
    dispatch(
      handleAddCart({
        ...item,
        quantity,
      }),
    );
  };

  // handle counts
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));
  const handleIncrement = () => setQuantity(quantity + 1);

  // Grab reviews from Redux so they persist per product
  const reviews = item.reviewsList ?? [];

  return (
    <div className="bg-[#E7F6F2] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm font-medium text-[#A5C9CA] hidden sm:block">
            <Link to="/" className="hover:text-[#395B64]">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-[#395B64]">
              Shop
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-[#2C3333]">{item.name}</span>
          </div>
        </div>

        {/* Product Card (image + info + actions) */}
        <div className="bg-white rounded-xl p-6 lg:p-10 shadow-sm border border-[#A5C9CA]/30 mb-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <ProductImage
              image={item.image}
              name={item.name}
              isRecipe={isRecipe}
            />

            <div className="w-full lg:w-1/2 flex flex-col">
              <ProductInfo
                name={item.name}
                category={item.category}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                isRecipe={isRecipe}
                isFavorite={isFavorite}
                onToggleFavorite={() => setIsFavorite(!isFavorite)}
              />

              <hr className="border-[#E7F6F2]" />

              <ProductActions
                isRecipe={isRecipe}
                quantity={quantity}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-xl p-6 lg:p-10 shadow-sm border border-[#A5C9CA]/30">
          <div className="flex items-center justify-between mb-8 border-b border-[#E7F6F2] pb-6">
            <Typography variant="subHead">Customer Reviews</Typography>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              <span className="text-xl font-black text-[#2C3333]">4.8</span>
              <span className="text-[#A5C9CA] font-medium">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <ReviewsList reviews={reviews} />
            <ReviewForm
              newReviewText={newReviewText}
              newRating={newRating}
              onTextChange={setNewReviewText}
              onRatingChange={setNewRating}
              onSubmit={handleSubmitReview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
