// utils
import { IdReplacer } from "../utils/IdReplacer";

// main
export const productHandler = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_KEY}/products`);
    const data = await response.json();
    // refine data
    const products = IdReplacer(data.products, "product_id");
    const reviews = IdReplacer(data.reviews, "product_id");
    const refinedData = { products, reviews };
    // response
    return refinedData;
  } catch (err) {
    console.log(err);
  }
};
