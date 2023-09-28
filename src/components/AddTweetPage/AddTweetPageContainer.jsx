import { useRef } from "react";
import useRedirect from "../../hooks/useRedirect";
import { useTheme } from "../../hooks/useTheme";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import AddTweetPageView from "./AddTweetView";

const AddTweetPageContainer = () => {
  useRedirect();

  const textareaInput = useRef();
  const { userLogged } = useTweetContext();
  const { theme } = useTheme();
  const { submitTweet, errorOccured } = SubmitService();

  return (
    <AddTweetPageView
      userLogged={userLogged}
      theme={theme}
      textareaInput={textareaInput}
      submitTweet={submitTweet}
      errorOccured={errorOccured}
    />
  );
};

export default AddTweetPageContainer;