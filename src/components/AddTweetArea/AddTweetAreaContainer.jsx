import { useRef } from "react";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddTweetAreaView from "./AddTweetAreaView";

export const AddTweetAreaContainer = () => {
  const { userLogged } = useTweetContext();
  const { submitTweet, errorOccured } = SubmitService();
  const { theme } = useTheme();
  const inputRef = useRef();

  return (
    <AddTweetAreaView
      userLogged={userLogged}
      submitTweet={submitTweet}
      errorOccured={errorOccured}
      theme={theme}
      inputRef={inputRef}
    />
  );
};
