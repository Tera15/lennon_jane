import Layout from "../components/Layout";
import Head from "next/head";
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
        <InstagramWidget instaPosts={instaPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${process.env.LENNON_JANE_INSTAGRAM}`;
  const response = await fetch(url);
  const data = await response.json();
  const instaPosts = data.data.slice(0, 6);
  console.log(instaPosts);
  return {
    props: {
      instaPosts: [...instaPosts],
    },
  };
}
