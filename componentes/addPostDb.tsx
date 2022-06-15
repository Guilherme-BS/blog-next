
import {
  Input,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddPost() {
  const [namePost, setNamePost] = useState("");
  const [newsPost, setNewsPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Heading textAlign="center">Adicione um Post</Heading>
      <FormControl isRequired width={"700px"} margin="auto">
        <FormLabel htmlFor="first-name">Name of Post </FormLabel>
        <Input
          id="first-name"
          placeholder="Name "
          onChange={(e) => setNamePost(e.target.value)}
        />
        <FormLabel htmlFor="first-name">News</FormLabel>
        <Input
          id="first-name"
          placeholder="News"
          onChange={(e) => setNewsPost(e.target.value)}
        />
        <FormLabel htmlFor="first-name">Image Url</FormLabel>
        <Input
          id="first-name"
          placeholder="Image"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="black"
        variant="outline"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="black"
        margin="1.5rem"
      >
        Create
      </Button>
    </Flex>
  );
}
