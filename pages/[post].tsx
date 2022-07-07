import React from "react";
import { useRouter } from "next/router";
import { Heading, Image, Text, Flex, Box } from "@chakra-ui/react";
import useBlog from "../utils/BlogContext";

export default function OnePost() {
  const { dbPost } = useBlog();
  const router = useRouter();

  const postId = router.query.post;
  if (postId === null) return <Text>Loading...</Text>;

  const post = dbPost.find(({ id }) => String(id) === postId);
  if (post === undefined) return <Text>Not found</Text>;

  return (
    <Box>
      <Heading textAlign="center" padding="1rem">
        {post.namePost}
      </Heading>
      <Flex>
        <Image src={post.imageUrl} alt="post" width="200px" height="200px" />
        <Text textAlign="center" margin="1rem">
          {post.newsPost}
        </Text>
      </Flex>
    </Box>
  );
}
