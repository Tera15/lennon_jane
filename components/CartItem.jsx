import { jsx, Container, Text, Divider, Button, Heading } from "theme-ui";
import { useState, useEffect } from "react";
import Image from "next/image";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
import useUpdateCart from "../hooks/useUpdateCart";

const CartItem = ({
  url,
  quantity,
  name,
  id,
  imageWidth,
  imageHeight,
  bagPage,
}) => {
  const {
    mutate: add,
    status: addStatus,
    reset: addReset,
  } = useRemoveFromCart();
  const {
    mutate: update,
    status: updateStatus,
    reset: updateReset,
  } = useUpdateCart();
  const [bagQuantity, setBagQuantity] = useState("");
  useEffect(() => {
    setBagQuantity(quantity);
  }, []);

  const handleUpdateQuanity = async (event, id, qty) => {
    event.preventDefault();
    console.log({ id });
    let values = { id, quantity: +qty };
    update(values);
  };

  return (
    <Container
      sx={{
        color: "black",
        position: "relative",
        fontWeight: "300",
        letterSpacing: 4,
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
          onClick={(e) => add(e, id)}
        >
          Remove
        </Text>

        <form onSubmit={(e) => handleUpdateQuanity(e, id, bagQuantity)}>
          <label htmlFor="quantity">x</label>
          <input
            id="quantity"
            type="number"
            min="0"
            value={bagQuantity}
            onChange={(e) => setBagQuantity(e.target.value)}
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
      </div>
    </Container>
  );
};

export default CartItem;
