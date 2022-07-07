import React from "react";

export interface IPostData {
  id?: number;
  imageUrl: string;
  namePost: string;
  newsPost: string;
}

export interface State {
  namePost: string;
  newsPost: string;
  imageUrl: string;
}

export interface Action {
  type: string;
  playload?: string;
  key?: string;
}
