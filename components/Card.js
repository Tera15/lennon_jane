/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx, Card, Text } from "theme-ui";
import Image from "next/image";
const ProductCard = ({ name, price, url }) => {
  console.log(price, name);
  return (
    <Card>
      <Image src={url} width={350} height={350} />
      <div sx={{ color: "black" }}>
        <Text>{name}</Text>
        <Text>${price}</Text>
      </div>
    </Card>
  );
};

export default ProductCard;
