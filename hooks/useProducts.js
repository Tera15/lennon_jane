import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useProducts() {
  return useQuery("products", () => commerce.products.list());
}
