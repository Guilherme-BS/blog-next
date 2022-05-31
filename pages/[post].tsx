import React from "react";
import { useRouter } from "next/router";
import { postData } from "../utils/post-data";
import { Heading, Image, Text, Flex, Box } from "@chakra-ui/react";

export default function PostOne() {
  const router = useRouter();

  const postId = router.query.post;
  if (postId == null) return <p>Loading...</p>;

  const post = postData.find((p) => String(p.id) === postId);
  if (post == null) return <p>Not found</p>;

  return (
    <Box>
      <Heading textAlign="center" padding="0.5em">
        {post.title}
      </Heading>
      <Flex>
        <Image src={post.imgUrl} alt="post" width="200px" height="200px" />
        <Text textAlign="center" margin="1em">
          {post.text}
        </Text>
      </Flex>
    </Box>
  );
}
