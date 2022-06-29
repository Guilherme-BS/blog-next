import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./NavBar";
import AddPost from "./addPostDb";
import { BlogContext } from "../utils/BlogContext";

export default function HomePage() {
  const { dbPost } = useContext(BlogContext);
  return (
    <Box>
      <NavBar />
      <AddPost></AddPost>
      <SimpleGrid gap={6} columns={{ sm: 1, md: 2, lg: 3 }}>
        {dbPost.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
