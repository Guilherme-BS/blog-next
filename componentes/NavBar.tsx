import React from "react";
import { Heading } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Heading
      as="h1"
      size="4xl"
      noOfLines={1}
      textAlign="center"
      padding="0.5em"
    >
      Rick and Morty News
    </Heading>
  );
}
