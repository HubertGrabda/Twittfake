/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddTweetAreaView from "./AddTweetAreaView";

export const AddTweetAreaContainer = () => {
  const { userLogged } = useTweetContext();

  if (!userLogged) return null;

  const { submitTweet, isError } = SubmitService();
  const { theme } = useTheme();
  const inputRef = useRef();

  return (
    <AddTweetAreaView
      userLogged={userLogged}
      submitTweet={submitTweet}
      isError={isError}
      theme={theme}
      inputRef={inputRef}
    />
  );
};
