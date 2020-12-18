/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Container, Text, Divider, Button, Heading } from "theme-ui";
import { useState, useEffect } from "react";
import Image from "next/image";
import useRemoveFromCart from "../hooks/useRemoveFromCart";

const CartItem = ({
  url,
  quantity,
  name,
  id,
  imageWidth,
  imageHeight,
  bagPage,
}) => {
  const { mutate, status, reset } = useRemoveFromCart();
  const [bagQuantity, setBagQuanity] = useState();

  useEffect(() => {
    setBagQuanity(quantity);
  }, []);
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
        <div>
          <Image
            src={url}
            width={imageWidth || 150}
            height={imageHeight || 150}
          />
          <Heading sx={{ fontSize: `${bagPage ? 3 : 1}`, color: "secondary" }}>
            {name}{" "}
          </Heading>
        </div>

        <Text
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => mutate(id)}
        >
          Remove
        </Text>
        {!bagPage ? (
          <div>
            <Text sx={{ textTransform: "lowercase" }}>x{quantity} </Text>
          </div>
        ) : (
          <form>
            <label htmlFor="quantity">x</label>
            <input
              id="quantity"
              type="number"
              value={bagQuantity}
              sx={{
                width: "3rem",
                height: 35,
                border: "none",
                backgroundColor: "muted",
                fontSize: 25,
                textAlign: "center",
              }}
            />
            <Button
              sx={{
                backgroundColor: "secondary",
                borderRadius: 0,
                mx: 2,
                py: 0.5,
              }}
            >
              save
            </Button>
          </form>
        )}
      </div>
    </Container>
  );
};

export default CartItem;
