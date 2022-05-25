import React from "react";
import { Image, Badge, Box } from "@chakra-ui/react";
import { IDataPost } from "../types/types";
import Link from "next/link";

interface dataP {
  data: IDataPost;
}
export default function Post({ data }: dataP) {
  return (
    <Link href={`/${data.id}`}>
      <a>
        <Box
          maxW="30vw"
          maxH="55vh"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={data.imgUrl} width="200px" height="200px" margin="auto" />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              ></Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {data.title}
            </Box>
            {data.text}
            <Box>
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center"></Box>
          </Box>
        </Box>
      </a>
    </Link>
  );
}
