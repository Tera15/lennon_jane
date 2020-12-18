/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx, Text, Heading, Flex } from "theme-ui";
import Image from "next/image";

const Collections = () => {
  return (
    <section
      sx={{
        textAlign: "center",
        backgroundColor: "main",
        color: "white",
        textTransform: "uppercase",
        fontSize: 30,
        fontWeight: "300",
      }}
    >
      <Heading
        as="h3"
        sx={{ transform: "translate(0, 4rem)", fontWeight: "300" }}
      >
        Collections
      </Heading>
      <div sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div sx={{ variant: "containers.collections" }}>
          <Image src="/scrunchyOne.png" height={500} width={500} />
          <Text>Scrunchies</Text>
        </div>
        <div sx={{ variant: "containers.collections" }}>
          <Image src="/scrunchyTwo.png" height={500} width={500} />
          <Text>Headbands</Text>
        </div>
      </div>
    </section>
  );
};

export default Collections;
