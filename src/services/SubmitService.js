import { useTweetContext } from "../hooks/useTweetContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearInput } from "../shared";
import { homePageRoute } from "../const/routing";
import { useUserDataContext } from "../hooks/useUserDataContext";

const SubmitService = () => {
  const { tweets, setTweets, setFilteredTweetsData, setIsTagClicked } =
    useTweetContext();

  const { userLogged } = useUserDataContext();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const clearAndNavigate = (input) => {
    clearInput(input);
    setIsTagClicked(false);
    if (document.body.clientWidth <= 1024) {
      navigate(homePageRoute);
    }
  };

  const submitTweet = (refName) => {
    let input = refName.current;

    const { value: inputValue = "" } = input || {};

    if (!inputValue) return setIsError(true);

    const newTweet = {
      id: tweets.length + 1,
      username: userLogged,
      content: input.value,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
    setFilteredTweetsData((prevTweets) => [newTweet, ...prevTweets]);
    setIsError(false);
    clearAndNavigate(input);
  };

  const submitComment = (tweetId, refName) => {
    let input = refName.current;

    const { value: inputValue = "" } = input || {};

    if (!inputValue) return setIsError(true);

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
      username: userLogged,
      content: input.value,
    };

    const updateTweetsWithNewComment = (prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      );

    setTweets((prevTweets) => updateTweetsWithNewComment(prevTweets));
    setFilteredTweetsData((prevTweets) =>
      updateTweetsWithNewComment(prevTweets)
    );

    setIsError(false);
    clearAndNavigate(input);
  };

  return { submitTweet, submitComment, isError };
};

export default SubmitService;
