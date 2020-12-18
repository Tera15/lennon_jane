import Layout from "../components/Layout";
import Head from "next/head";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { commerce } from "../src/lib/commerce";
import Blurb from "../components/Blurb";
import Collections from "../components/Collections";
import InstagramWidget from "../components/InstagramWidget";
export default function Home({ instaPosts }) {
  console.log(instaPosts);
  return (
    <>
      <Layout>
        <Blurb />
        <Collections />
        <InstagramWidget />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${process.env.NEXT_PUBLIC_LENNON_JANE_INSTAGRAM}`;
  await queryClient.prefetchQuery("instagram", () =>
    fetch(url).then((response) => response.json())
  );
  const response = await fetch(url);
  const data = await response.json();
  const instaPosts = data && data.data.slice(0, 6);
  console.log(instaPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      instaPosts: instaPosts,
    },
  };
}
