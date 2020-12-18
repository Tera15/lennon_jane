/** @jsx jsx */ /** @jsxRuntime classic */
import { commerce } from "../../src/lib/commerce";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import useProducts from "../../hooks/useProducts";
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

import Layout from "../../components/Layout";
import ProductCard from "../../components/Card";

const Shop = () => {
  const products = useProducts();

  return (
    <Layout>
      <div sx={{ variant: "containers.shopPage" }}>
        {products.data.data.map((product) => {
          const {
            id,
            name,
            media: { source },
            price: { formatted },
          } = product;
          return (
            <Link href="/Shop/[id.js]" as={`/Shop/${id}`} key={id}>
              <Styled.a>
                <ProductCard name={name} price={formatted} url={source} />
              </Styled.a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const getProducts = async () => {
    const products = await commerce.products.list();
    return products;
  };
  await queryClient.prefetchQuery("products", getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Shop;
