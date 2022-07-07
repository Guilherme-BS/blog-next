import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../service/firebase";
import useBlog from "../utils/BlogContext";
import {
  Input,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Flex,
} from "@chakra-ui/react";

// cria os tipos e a funcao necessaria para ultiliar o useReducer

export default function AddPost() {

  const { state, dispatch } = useBlog();
  //responsavel capturar e salvar os dados no state

  const captureInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "input_text",
      playload: e.target.value,
      key: e.target.id,
    });
  };

  async function addPostDb() {
    try {
      const docRef = await addDoc(collection(db, "post"), {
        id: Math.random(),
        namePost: state.namePost,
        newsPost: state.newsPost,
        imageUrl: state.imageUrl,
      });
    } catch (error) {
      console.log(`Error adding document${error}`);
    }
    dispatch({
      type: "reset",
    });
  }

  return (
    <Flex alignItems="center" flexDirection="column">
      <Heading textAlign="center">Adicione um Post</Heading>
      <FormControl isRequired width={"700px"} margin="auto">
        <FormLabel htmlFor="first-name">Name of Post </FormLabel>
        <Input
          id="namePost"
          placeholder="Name "
          value={state.namePost}
          onChange={(e) => captureInputValue(e)}
        />
        <FormLabel htmlFor="first-name">News</FormLabel>
        <Input
          id="newsPost"
          placeholder="News"
          value={state.newsPost}
          onChange={(e) => captureInputValue(e)}
        />
        <FormLabel htmlFor="first-name">Image Url</FormLabel>
        <Input
          id="imageUrl"
          placeholder="Image"
          value={state.imageUrl}
          onChange={(e) => captureInputValue(e)}
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
