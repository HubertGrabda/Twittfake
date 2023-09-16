import { useRef } from "react";
import useRedirect from "../../hooks/useRedirect";
import { useTheme } from "../../hooks/useTheme";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import NewTweetPageView from "./NewTweetView";

const NewTweetPageContainer = () => {
  useRedirect();

  const { userLogged } = useTweetContext();
  const { theme } = useTheme();
  const textareaInput = useRef();
  const { submitTweet } = SubmitService();

  return (
    <NewTweetPageView
      userLogged={userLogged}
      theme={theme}
      textareaInput={textareaInput}
      submitTweet={submitTweet}
    />
  );
};

export default NewTweetPageContainer;
