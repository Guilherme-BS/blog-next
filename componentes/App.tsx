import React from "react";
import { dataPost } from "../utils/data-post";
import Post from "../componentes/Post";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {dataPost.map((data) => (
          <Post data={data} />
        ))}
      </Grid>
    </div>
  );
}
