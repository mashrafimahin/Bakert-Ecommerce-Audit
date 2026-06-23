// add products as favorite
export const addFavorite = async (productId: string) => {
  try {
    const userId = localStorage.getItem("user_access");
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}/product/placeFavorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
        credentials: "include",
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};
