import { useContext } from "react";
import { TweetsContext } from "../context/TweetContext";

export const useTweetContext = () => {
  return useContext(TweetsContext);
};
