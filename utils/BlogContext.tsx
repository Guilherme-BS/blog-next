import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import { Action, IPostData, State } from "../types/types";
import blogReducer, { initialState } from "./blogReducer";
import { fetchPosts } from "./fetchPosts";

type DataContextProps = {
  children: React.ReactNode;
};

type DataPostType = {
  dbPost: IPostData[];
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialValue: DataPostType = {
  dbPost: [],
  state: initialState,
  dispatch: () => {},
};

export const BlogContext = createContext<DataPostType>(initialValue);

export const BlogContextProvider = ({ children }: DataContextProps) => {
  const [dbPost, setDbPost] = useState(initialValue.dbPost);
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    (async function fetchPostData() {
      try {
        const data = await fetchPosts();
        setDbPost(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <BlogContext.Provider value={{ dbPost, state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default function useBlog() {
  const context = useContext(BlogContext);
  return context;
}
