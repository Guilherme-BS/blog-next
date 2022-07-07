import React from "react";
import Post from "./Post";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./NavBar";
import AddPost from "./addPostDb";
import useBlog from "../utils/BlogContext";

export default function HomePage() {
  const { dbPost } = useBlog();

  return (
    <Box>
      <NavBar />
      <AddPost></AddPost>
      <SimpleGrid gap={6} columns={{ sm: 1, md: 2, lg: 3 }}>
        {dbPost.map((postInfo) => (
          <Post key={postInfo.id} postInfo={postInfo} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
