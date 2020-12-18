/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx } from "theme-ui";
import { Grid, Card, Text, Heading, Button } from "theme-ui";
import Image from "next/image";
import BrandLogo from "./BrandLogo";

let logos = new Array(14).fill(null);
const Blurb = () => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
        py: 6,
      }}
    >
      <div
        sx={{
          width: "60%",
          transform: "translate(17rem, -10rem)",
          position: "relative",
          zIndex: "1111",
        }}
      >
        <img
          src="https://scontent.cdninstagram.com/v/t51.29350-15/130792158_400508384523113_4301920586691246456_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=4kFr2lI8LycAX8WoGpG&_nc_ht=scontent.cdninstagram.com&oh=254dc38727f16ddf067aedcddc5385d0&oe=5FFEDD1F"
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: "-22px -10px 10px 1px #C1AA9A",
          }}
        />
      </div>
      <div
        sx={{
          width: "43%",
          transform: "translate(-13.5rem, -12rem)",
          position: "relative",
        }}
      >
        <img
          src="https://scontent.cdninstagram.com/v/t51.29350-15/131047359_388765302195088_4879653583711725558_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8ae9d6&_nc_ohc=vafxGFz_eaEAX__rG1q&_nc_ht=scontent.cdninstagram.com&oh=12072662645c87caa78e9e6a3eae24ec&oe=6000598F"
          alt=""
          sx={{
            width: "100%",
            boxShadow: "10px -10px 10px 1px",
            height: "90%",
          }}
        />
      </div>
      <div>
        <Heading as="h2" sx={{ color: "secondary", fontSize: 65 }}>
          For every type <br /> of hair day.
        </Heading>
        <BrandLogo />
      </div>
      <div sx={{ maxWidth: "65ch" }}>
        <Heading as="h2" sx={{ fontSize: 40 }}>
          Ethically Made. Hand Finished.
        </Heading>
        <Text sx={{ fontSize: 20 }}>
          Made In Canada, our hair accessories are hand-finished to accomplish a
          seamless style for all your hair needs. <br /> For each purchase, 10%
          of the sale price is donated to a select charity of the month.
        </Text>
        <Button
          sx={{
            bg: "muted",
            color: "black",
            borderRadius: 0,
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Blurb;
