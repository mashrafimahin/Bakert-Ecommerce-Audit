// main
export const dashboardHandler = async () => {
  const userId = localStorage.getItem("user_access");

  if (!userId) {
    return {
      success: false,
    };
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/userProducts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
        credentials: "include",
      },
    );
    const data = await response.json();
    // modify data
    const modifiedFavs = [];

    // set product_id -> id
    for (const item of data.favorites) {
      item.id = item.product_id;
      modifiedFavs.push(item);
    }

    return {
      orders: [...data.orders],
      favorites: modifiedFavs,
    };
  } catch (err) {
    console.log(err);
    return { orders: [], favorites: [] };
  }
};
