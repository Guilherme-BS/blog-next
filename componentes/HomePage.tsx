import React from "react";
import { postData } from "../utils/post-data";
import Post from "./Post";
import { Box, Grid } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <Box>
      <NavBar />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {postData.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </Grid>
    </Box>
  );
}
