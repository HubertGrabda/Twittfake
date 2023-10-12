import { useContext } from "react";
import { TweetsContext } from "../context/TweetContext";

export const useTweetContext = () => useContext(TweetsContext);
