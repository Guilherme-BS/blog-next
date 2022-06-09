import React from "react";
import { Image, Badge, Box } from "@chakra-ui/react";
import { IDataPost } from "../types/types";
import Link from "next/link";

interface PostProps {
  data: IDataPost;
}
export default function Post({
  data: { id, imgUrl, title, newsText },
}: PostProps) {
  return (
    <Link href={`/${id}`}>
      <Box
        maxW="30vw"
        minW="300px"
        maxH="320px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        margin="auto"
      >
        <Image src={imgUrl} width="200px" height="200px" margin="auto" />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
          {newsText}
        </Box>
      </Box>
    </Link>
  );
}
