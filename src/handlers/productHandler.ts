/**
 * Product Data Handler
 *
 * Fetches and returns the full product catalog (baked goods + recipes).
 * Each product now includes its own `reviews` array so reviews are
 * stored alongside the product in Redux rather than local state.
 */

// Shared initial reviews that can be attached to products
const INITIAL_REVIEWS_PRODUCT = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "June 15, 2026",
    text: "Absolutely delicious! The texture was perfect and it looked just like the pictures. Will definitely order again for my next party.",
  },
  {
    id: 2,
    author: "Michael T.",
    rating: 4,
    date: "May 28, 2026",
    text: "Very good quality. The delivery was right on time. Only giving 4 stars because I wish the portion was slightly larger, but the taste is unmatched!",
  },
];

// main
export const productHandler = async () => {
  try {
    // code
    const PRODUCTS = [
      {
        id: "1",
        name: "Decadent Chocolate Truffle",
        category: "Cakes",
        price: 45.0,
        rating: 4.8,
        reviews: 124,
        // each product carries its own reviews for Redux storage
        reviewsList: [...INITIAL_REVIEWS_PRODUCT],
        image:
          "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc4MTU4NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        isNew: true,
      },
      {
        id: "2",
        name: "Strawberry Vanilla Dream",
        category: "Cupcakes",
        price: 18.0,
        rating: 4.9,
        reviews: 89,
        reviewsList: [...INITIAL_REVIEWS_PRODUCT],
        image:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3ODE1ODU3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        isNew: false,
      },
      {
        id: "3",
        name: "Classic Tiered Wedding Cake",
        category: "Wedding",
        price: 350.0,
        rating: 5.0,
        reviews: 42,
        reviewsList: [...INITIAL_REVIEWS_PRODUCT],
        image:
          "https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3ODE1ODU3ODJ8MA&lib=rb-4.1.0&q=80&w=1080",
        isNew: false,
      },
      {
        id: "4",
        name: "Red Velvet Slice",
        category: "Pastries",
        price: 6.5,
        rating: 4.6,
        reviews: 210,
        reviewsList: [...INITIAL_REVIEWS_PRODUCT],
        image:
          "https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzgxNTg1NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        isNew: false,
      },
    ];

    // Recipes have a simpler structure but still carry reviewsList
    const RECIPES = [
      {
        id: "r1",
        category: "recipe",
        name: "Mastering the Chocolate Sponge",
        price: 15,
        reviewsList: [...INITIAL_REVIEWS_PRODUCT],
        image:
          "https://images.unsplash.com/photo-1588467850695-a898367ce465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjByZWNpcGVzfGVufDF8fHx8MTc4MTU4NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ];

    return [...PRODUCTS, ...RECIPES];
  } catch (err) {
    console.log(err);
  }
};
