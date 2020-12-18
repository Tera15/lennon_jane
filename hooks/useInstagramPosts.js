import { useQuery } from "react-query";

export default function useProducts() {
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${process.env.NEXT_PUBLIC_LENNON_JANE_INSTAGRAM}`;
  return useQuery("instagram", () =>
    fetch(url).then((response) => response.json())
  );
}
