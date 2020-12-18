/** @jsx jsx */ /** @jsxRuntime classic */
import React, { useState } from "react";
import { jsx, Divider, Text, Heading, Styled } from "theme-ui";
import Image from "next/image";
import Link from "next/link";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
const ShoppingBag = ({ x, y }) => {
  const [openState, setOpenState] = useState(false);
  const products = useCart();
  console.log(products);
  // cart functionality
  const cartItems = products.data;
  const cartTotal =
    cartItems &&
    cartItems.reduce((acc, item) => {
      acc += item.line_total.raw;
      return Math.floor(acc);
    }, 0);

  return (
    <React.Fragment>
      <div
        sx={{
          position: "absolute",
          transform: `translate(${x}rem, ${y}rem)`,
          zIndex: 22,
        }}
        onClick={(e) => setOpenState((prev) => !prev)}
      >
        <Image src="/shoppingbag.svg" width={34} height={34} />
        <span
          sx={{
            transform: "translate(-220%, -23%)",
            display: "inline-block",

            cursor: "pointer",
          }}
        >
          {(cartItems && cartItems.length) || 0}
        </span>
      </div>
      <div
        sx={{
          minHeight: "20rem",
          minWidth: "25rem",
          border: "1px solid #BA694C",
          backgroundColor: "#fff",
          zIndex: 1,
          p: 2,
          position: "absolute",
          transform: `translate(21.5rem, 4rem)`,
          display: `${openState ? "visible" : "none"}`,
        }}
      >
        {cartItems &&
          cartItems.map((item) => {
            return (
              <div key={item.id}>
                <CartItem
                  url={item.media.source}
                  price={item.line_total.formatted}
                  quantity={item.quantity}
                  name={item.name}
                  id={item.id}
                  imageWidth={100}
                  imageHeight={100}
                />
                <Divider sx={{ color: "secondary" }} />
              </div>
            );
          })}

        {!cartTotal ? (
          <div
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Heading sx={{ color: "secondary" }}>
              Fill your bag with bunches of <br></br>scrunches.. and headbands
              too!
            </Heading>
          </div>
        ) : (
          <div>
            <Text sx={{ color: "black" }}>Total: ${cartTotal}</Text>
            <Text
              sx={{ color: "black", fontSize: 1, color: "secondary", my: 2 }}
            >
              Shipping and taxes calculated at checkout
            </Text>{" "}
            <Link href="/Cart">
              <a
                sx={{
                  color: "black",
                  borderBottom: "2px solid #ba694c",
                  cursor: "pointer",
                }}
              >
                VIEW CART
              </a>
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ShoppingBag;
