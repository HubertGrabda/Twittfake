import { useTweetContext } from "../hooks/useTweetContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearInput } from "../shared";
import { homePageRoute } from "../const/routing";

const SubmitService = () => {
  const {
    tweets,
    setTweets,
    setFilteredTweetsData,
    userLogged,
    setIsTagClicked,
  } = useTweetContext();
  const navigate = useNavigate();
  const [isError, setisError] = useState(false);

  const submitTweet = (refName) => {
    let input = refName.current;

    if (!input.value) {
      setisError(true);
      return;
    } else setisError(false);

    const newTweet = {
      id: tweets.length + 1,
      username: userLogged,
      content: input.value,
    };

    setTweets([newTweet, ...tweets]);
    setFilteredTweetsData([newTweet, ...tweets]);

    clearInput(input);
    setIsTagClicked(false);

    if (document.body.clientWidth <= 1024) {
      navigate(homePageRoute);
    }
  };

  const submitComment = (tweetId, refName) => {
    let input = refName.current;

    if (!input.value) {
      setisError(true);
      return;
    }
    setisError(false);

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
      clearInput(input);

    setTweets((prevTweets) => updateTweetsWithNewComment(prevTweets));
    setFilteredTweetsData((prevTweets) =>
      updateTweetsWithNewComment(prevTweets)
    );

  };

  return { submitTweet, submitComment, isError };
};

export default SubmitService;
