import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";
// Was experimenting with dynamic routes
export default function useProductPage() {
  return useQuery(["productPage"], (id) => commerce.products.retrieve(id));
}
