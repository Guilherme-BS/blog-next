import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../service/firebase";
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
  const [namePost, setNamePost] = useState<string>("");
  const [newsPost, setNewsPost] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  async function addPostDb() {
    try {
      const docRef = await addDoc(collection(db, "post"), {
        id: Math.random(),
        namePost,
        newsPost,
        imageUrl,
      });
    } catch (error) {
      console.log(`Error adding document${error}`);
    }
    setNamePost('')
    setNewsPost('')
    setImageUrl('')
  }

  return (
    <Flex alignItems="center" flexDirection="column">
      <Heading textAlign="center">Adicione um Post</Heading>
      <FormControl isRequired width={"700px"} margin="auto">
        <FormLabel htmlFor="first-name">Name of Post </FormLabel>
        <Input
          id="first-name"
          placeholder="Name "
          value={namePost}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNamePost(e.target.value)
          }
        />
        <FormLabel htmlFor="first-name">News</FormLabel>
        <Input
          id="first-name"
          placeholder="News"
          value={newsPost}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewsPost(e.target.value)
          }
        />
        <FormLabel htmlFor="first-name">Image Url</FormLabel>
        <Input
          id="first-name"
          placeholder="Image"
          value={imageUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageUrl(e.target.value)
          }
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
        onClick={addPostDb}
      >
        Create
      </Button>
    </Flex>
  );
}
