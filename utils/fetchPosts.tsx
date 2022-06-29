import {
  collection,
  getDocs,
  query,
} from "firebase/firestore/lite";
import { db } from "../service/firebase";
import { IPostData } from "../types/types";

export async function fetchPosts() {
  const docRef = collection(db, "post");
  const q = query(docRef);
  const dataPost: IPostData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => dataPost.push(doc.data() as IPostData));
  return dataPost;
}