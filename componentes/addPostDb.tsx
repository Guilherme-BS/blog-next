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
import { useReducer } from "react";
// cria os tipos e a funcao necessaria para ultiliar o useReducer
type State = {
  namePost: string;
  newsPost: string;
  imageUrl: string;
};

type Action = { type: string; playload?: string; key?: string };

const initialState: State = { namePost: "", newsPost: "", imageUrl: "" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "input_text":
      if (action.key) return {
        ...state,
        [action.key]: action.playload
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
export default function AddPost() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //responsavel por salvar os dados no state
  const handlePostData = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e) => handlePostData(e)}
        />
        <FormLabel htmlFor="first-name">News</FormLabel>
        <Input
          id="newsPost"
          placeholder="News"
          value={state.newsPost}
          onChange={(e) => handlePostData(e)}
        />
        <FormLabel htmlFor="first-name">Image Url</FormLabel>
        <Input
          id="imageUrl"
          placeholder="Image"
          value={state.imageUrl}
          onChange={(e) => handlePostData(e)}
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
