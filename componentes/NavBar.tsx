import React from "react";
import { Heading, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Heading
      as="h1"
      size="4xl"
      noOfLines={1}
      textAlign="center"
      padding="0.5em"
    >
      <Text fontSize={{ base: '30px', md: '45px', lg: '60px' }}> Rick and Morty News</Text>
    </Heading>
  );
}
