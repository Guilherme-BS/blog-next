import React from "react";
import { useRouter } from "next/router";
import postData from "../utils/post-data.json";
import { Heading, Image, Text, Flex, Box } from "@chakra-ui/react";

export default function OnePost() {
  const router = useRouter();

  const postId = router.query.post;
  if (postId === null) return <Text>Loading...</Text>;

  const post = postData["post-data"].find(({ id }) => String(id) === postId);
  if (post === undefined) return <Text>Not found</Text>;

  return (
    <Box>
      <Heading textAlign="center" padding="1rem">
        {post.title}
      </Heading>
      <Flex>
        <Image src={post.imgUrl} alt="post" width="200px" height="200px" />
        <Text textAlign="center" margin="1rem">
          {post.newsText}
        </Text>
      </Flex>
    </Box>
  );
}
