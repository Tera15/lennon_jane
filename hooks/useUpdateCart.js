import { useMutation, useQueryClient } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation(
    (values) => {
      return commerce.cart
        .update(values.id, { quantity: values.quantity })
        .then((value) => console.log(value, " adadada"));
    },
    {
      onSuccess: (value) => {
        return queryClient.invalidateQueries("cart");
      },
    }
  );
}
