import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useCart() {
  return useQuery("cart", () => commerce.cart.contents());
}
