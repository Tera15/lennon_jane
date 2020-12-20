import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { commerce } from "../src/lib/commerce";
import { Divider, Heading } from "theme-ui";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import useCartSession from "../hooks/useCartSession";
const Cart = () => {
  const cart = useCart();
  console.log(cart, "asdad");
  return (
    <Layout>
      <Heading
        sx={{
          textAlign: "center",
          color: "secondary",
          variant: "headers.sub",
          transform: "translate(0, -10rem)",
        }}
      >
        Shopping Bag
      </Heading>
      <div sx={{ px: 200, py: 10 }}>
        {cart.isLoading ? (
          <div>loading....</div>
        ) : (
          cart &&
          cart.data.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <CartItem
                  url={cartItem.media.source}
                  price={cartItem.line_total.formatted}
                  quantity={cartItem.quantity}
                  name={cartItem.name}
                  id={cartItem.id}
                  imageWidth={300}
                  imageHeight={300}
                  bagPage
                />
                <Divider sx={{ color: "secondary" }} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  let queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    "cart",
    commerce.cart.contents().then((content) => content)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }, // will be passed to the page component as props
  };
}
export default Cart;
