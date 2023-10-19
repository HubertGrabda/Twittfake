import { useContext } from "react";
import { TweetsContext } from "../context/TweetContext";

export const useTweetContext = () => {
  const tweetsContext = useContext(TweetsContext);

  if (!TweetsContext) {
    throw new Error("error in use context hook");
  }

  return tweetsContext;
};
