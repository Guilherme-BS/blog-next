import React from "react";
import postData from "../utils/post-data.json";
import Post from "./Post";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <Box>
      <NavBar />
      <SimpleGrid gap={6} columns={{ sm: 1, md: 2, lg: 3 }}>
        {postData["post-data"].map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
