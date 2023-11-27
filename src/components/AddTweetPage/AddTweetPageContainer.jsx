import { useRef } from "react";
import useRedirect from "../../hooks/useRedirect";
import { useTheme } from "../../hooks/useTheme";
import SubmitService from "../../services/SubmitService";
import AddTweetPageView from "./AddTweetView";
import { useUserDataContext } from "../../hooks/useUserDataContext";

const AddTweetPageContainer = () => {
  useRedirect();

  const textareaInput = useRef();
  const { userLogged } = useUserDataContext();
  const { theme } = useTheme();
  const { submitTweet, isError } = SubmitService();

  return (
    <AddTweetPageView
      userLogged={userLogged}
      theme={theme}
      textareaInput={textareaInput}
      submitTweet={submitTweet}
      isError={isError}
    />
  );
};

export default AddTweetPageContainer;
