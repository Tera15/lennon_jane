import { useMutation, useQueryClient } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation(
    (id) => {
      return commerce.cart.remove(id).then((value) => value);
    },
    {
      onSuccess: (value) => {
        return queryClient.invalidateQueries("cart");
      },
    }
  );
}
