import { useTweetContext } from "../hooks/useTweetContext";
import { useTheme } from "../hooks/useTheme";
import { classNames } from "../shared";
import { useNavigate } from "react-router-dom";
import {
  AddCommentInputPlaceholder,
  AddTweetInputPlaceholder,
} from "../const/input";

const SubmitService = () => {
  const {
    tweets,
    setTweets,
    filteredTweetsData,
    setFilteredTweetsData,
    userLogged: loggedUsername,
  } = useTweetContext();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const submitTweet = (refName) => {
    let input = refName.current;

    const InputErrorMessage = "Nie można dodać pustego tweeta!";
    const errorClassName = "textarea__input--error";
    const defaultClassName = classNames([
      "textarea__input",
      theme === "isDark" && "textarea__input--isDark",
    ]);

    if (!input.value) {
      input.placeholder = InputErrorMessage;
      input.className = errorClassName;
      return;
    }

    const newTweet = {
      id: tweets.length + 1,
      username: loggedUsername,
      content: input.value,
    };

    setTweets([newTweet, ...tweets]);
    setFilteredTweetsData([newTweet, ...filteredTweetsData]);

    input.placeholder = AddTweetInputPlaceholder(loggedUsername);
    input.value = "";
    input.className = defaultClassName;

    if (window.innerWidth <= 1024) {
      navigate("/");
    }
  };

  const submitComment = (id, refName, inputErrorMessage) => {
    let input = refName.current;

    if (!input.value) {
      input.placeholder = inputErrorMessage;
      input.className = "add-comment__input--error";
      return;
    }

    const highestCommentId = tweets.reduce((highestID, tweet) => {
      if (tweet.comments && tweet.comments.length > 0) {
        const maxCommentId = tweet.comments.reduce(
          (maxID, comment) => Math.max(maxID, comment.id),
          0
        );
        return Math.max(highestID, maxCommentId);
      }
      return highestID;
    }, 0);

    const newComment = {
      id: highestCommentId + 1,
      username: loggedUsername,
      content: input.value,
    };

    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      )
    );

    setFilteredTweetsData((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      )
    );

    input.placeholder = AddCommentInputPlaceholder;
    input.value = "";
    input.className = "add-comment__input";
  };

  return { submitTweet, submitComment };
};

export default SubmitService;
