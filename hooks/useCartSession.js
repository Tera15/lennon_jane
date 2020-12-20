import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useCartSession() {
  return useQuery("cart", () => commerce.cart.id());
}
