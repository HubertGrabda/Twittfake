/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddTweetAreaView from "./AddTweetAreaView";
import { useUserDataContext } from "../../hooks/useUserDataContext";

export const AddTweetAreaContainer = () => {
  const { userLogged } = useUserDataContext();

  if (!userLogged) return;

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
