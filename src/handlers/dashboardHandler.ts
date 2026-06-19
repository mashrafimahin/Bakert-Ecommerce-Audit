// Dashboard Data Handler

// main
export const dashboardHandler = async () => {
  try {
    // ordered list
    const ORDERED_LIST = [
      {
        id: "#ORD-12345",
        orderedDate: "June 12, 2026",
        status: "Delivered",
        category: "Cakes",
        image:
          "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc4MTU4NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        name: "Decadent Chocolate Truffle",
        quantity: 2,
        price: 45,
        rating: 4.8,
        reviews: 124,
      },
      {
        id: "#ORD-12345",
        orderedDate: "June 12, 2026",
        status: "Delivered",
        category: "Cakes",
        image:
          "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc4MTU4NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        name: "Decadent Chocolate Truffle",
        quantity: 2,
        price: 45,
      },
    ];

    return { orders: [...ORDERED_LIST], favorites: [...ORDERED_LIST] };
  } catch (err) {
    console.log(err);
    return { orders: [], favorites: [] };
  }
};
