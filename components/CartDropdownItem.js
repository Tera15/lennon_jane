import { jsx, Container, Text, Divider, Button, Heading } from "theme-ui";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useRemoveFromCart from "../hooks/useRemoveFromCart";

const CartDropdownItem = ({
  url,
  quantity,
  name,
  id,
  product_id,
  imageWidth,
  imageHeight,
  bagPage,
}) => {
  const { mutate } = useRemoveFromCart();

  return (
    <Container
      sx={{
        color: "black",
        position: "relative",
        fontWeight: "bold",
      }}
    >
      <div
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: `${bagPage ? 3 : 1}`,
        }}
      >
        <Link href="/Shop/[id.js]" as={`/Shop/${product_id}`}>
          <a>
            <div>
              <Image
                src={url}
                width={imageWidth || 150}
                height={imageHeight || 150}
              />
              <Heading
                sx={{ fontSize: `${bagPage ? 3 : 1}`, color: "secondary" }}
              >
                {name}{" "}
              </Heading>
            </div>
          </a>
        </Link>
        <Text
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => mutate(id)}
        >
          Remove
        </Text>
        <div>
          <Text sx={{ textTransform: "lowercase" }}>x{quantity} </Text>
        </div>
      </div>
    </Container>
  );
};

export default CartDropdownItem;
