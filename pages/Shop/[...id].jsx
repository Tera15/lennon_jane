import { useEffect, useState } from "react";
import Link from "next/link";
import { commerce } from "../../src/lib/commerce";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { Button, Text, Heading, Grid } from "theme-ui";
import Layout from "../../components/Layout";
import Image from "next/image";
import useAddToCart from "../../hooks/useAddToCart";
const ShopPage = ({ product, productId }) => {
  const [quantity, setQuantity] = useState(1);
  const { mutate, status, reset } = useAddToCart();
  const {
    id,
    name,
    description,
    media: { source },
    price: { formatted },
    related_products,
  } = product;

  return (
    <Layout>
      <Grid sx={{ mx: 200 }} columns={[2]}>
        <div sx={{ p: 2 }}>
          <div
            sx={{
              transform: "translate(3rem, -9rem)",
              position: "relative",
              zIndex: "1111",
            }}
          >
            <img
              src={source}
              alt=""
              sx={{
                width: "70%",
                boxShadow: "-22px -10px 10px 1px #C1AA9A",
              }}
            />
            <Text sx={{ fontWeight: "bold" }}>${formatted}</Text>
          </div>
        </div>

        <div
          sx={{
            p: 2,
            m: 55,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Heading
            sx={{
              textAlign: "center",
              transform: "translate(0, -15rem)",
              variant: "headers.sub",
              color: "secondary",
            }}
          >
            {name}
          </Heading>
          <Text sx={{ variant: "paragraph" }}>
            Made in Canada, our hair accessories are hand-finished to accomplish
            a seamless style for all your hair needs. <br />
            For each purchase, 10% of the sale price is donated to a select
            charity of the month.
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutate({ id, quantity });
            }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="quantity" sx={{ display: "inline-block", my: 10 }}>
              <Text sx={{ variant: "paragraph" }}>Quantity</Text>
              <input
                onChange={(event) => setQuantity(event.target.value)}
                type="number"
                id="quantity"
                sx={{ width: 80 }}
                value={quantity}
              />
            </label>
            <Button sx={{ variant: "button" }}>Add to cart</Button>
          </form>
        </div>

        <div sx={{ p: 2 }}>
          <Heading sx={{ color: "secondary", variant: "headers.sub" }}>
            You may also like
          </Heading>
        </div>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            overflowX: "scroll",
            gap: 2,
            p: 2,
          }}
        >
          {related_products.map((product) => {
            return (
              <Link
                href="/Shop/[id.js]"
                as={`/Shop/${product.id}`}
                key={product.id}
              >
                <a>
                  <Image src={product.media.source} height={250} width={250} />
                </a>
              </Link>
            );
          })}
        </div>
      </Grid>
    </Layout>
  );
};

export async function getStaticPaths({ product }) {
  console.log(product);
  let items = await commerce.products.list();
  let products = items.data;
  const paths = products.map((product) => ({ params: { id: [product.id] } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await commerce.products.retrieve(params.id);

  return {
    props: {
      product,
    },
  };
}

export default ShopPage;
