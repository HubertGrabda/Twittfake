import { useTweetContext } from "../hooks/useTweetContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearInput } from "../shared";

const SubmitService = () => {
  const { tweets, setTweets, setFilteredTweetsData, userLogged } =
    useTweetContext();
  const navigate = useNavigate();
  const [errorOccured, setErrorOccured] = useState(false);

  const submitTweet = (refName) => {
    let input = refName.current;

    if (!input.value) {
      setErrorOccured(true);
      return;
    } else setErrorOccured(false);

    const newTweet = {
      id: tweets.length + 1,
      username: userLogged,
      content: input.value,
    };

    setTweets([newTweet, ...tweets]);
    setFilteredTweetsData([newTweet, ...tweets]);

    clearInput(input);

    if (window.innerWidth <= 1024) {
      navigate("/");
    }
  };

  const submitComment = (tweetId, refName) => {
    let input = refName.current;

    if (!input.value) {
      setErrorOccured(true);
      return;
    }
    setErrorOccured(false);

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

    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      )
    );

    setFilteredTweetsData((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      )
    );

    clearInput(input);
  };

  return { submitTweet, submitComment, errorOccured };
};

export default SubmitService;
