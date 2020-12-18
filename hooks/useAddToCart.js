import { useMutation, useQueryClient } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation(
    (values) => {
      return commerce.cart
        .add(values.id, values.quantity)
        .then((value) => value);
    },
    {
      onSuccess: (value) => {
        return queryClient.invalidateQueries("cart");
      },
    }
  );
}
