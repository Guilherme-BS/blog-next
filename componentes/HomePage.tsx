import React from "react";
import { postData } from "../utils/post-data";
import Post from "./Post";
import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function HomePage() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan430] = useMediaQuery("(min-width: 430px)")
  let colums = ""
  if(isLargerThan900){
    colums = "repeat(3,3fr)"
  }
  else if(isLargerThan900 === false){
    colums = "repeat(2,2fr)"
  }
  if(isLargerThan430 === false) {
    colums = ""
  }

  return (
    <Box>
      <NavBar />
      <Grid templateColumns={colums} gap={6} gridAutoFlow="row">
        {postData.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </Grid>
    </Box>
  );
}
