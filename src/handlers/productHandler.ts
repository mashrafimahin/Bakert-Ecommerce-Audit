// main
export const productHandler = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_KEY}/products`);
    const data = await response.json();

    // refine data
    const refinedData = [];

    // loop
    for (let i = 0; i < data.length; i++) {
      const new_product = { ...data[i], id: data[i].product_id };
      refinedData.push(new_product);
    }

    // response
    return refinedData;
  } catch (err) {
    console.log(err);
  }
};
