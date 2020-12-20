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
      }}
    >
      <Heading
        as="h3"
        sx={{ transform: "translate(0, 4rem)", variant: "headers.sub" }}
      >
        Collections
      </Heading>
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <div sx={{ variant: "containers.collections" }}>
          <Image src="/scrunchyOne.png" height={500} width={500} />
          <Heading sx={{ variant: "headers.sub_sub" }}>Scrunchies</Heading>
        </div>
        <div sx={{ variant: "containers.collections" }}>
          <Image src="/scrunchyTwo.png" height={500} width={500} />
          <Heading sx={{ variant: "headers.sub_sub" }}>Headbands</Heading>
        </div>
      </div>
    </section>
  );
};

export default Collections;
