import React, { createContext, useState, useEffect } from "react";
import { IPostData } from "../types/types";
import { fetchPosts } from "./fetchPosts";

type DataContextProps = {
  children: React.ReactNode;
};

type DataPostType = {
  dbPost: IPostData[];
};

const initialValue: DataPostType = {
  dbPost: [],
};

export const BlogContext = createContext<DataPostType>(initialValue);

export const BlogContextProvider = ({ children }: DataContextProps) => {
  const [dbPost, setDbPost] = useState(initialValue.dbPost);
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
    <BlogContext.Provider value={{ dbPost }}>
      {children}
    </BlogContext.Provider>
  );
};
