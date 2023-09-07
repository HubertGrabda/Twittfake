import { useState } from "react";
import { toggleState } from "../shared";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../hooks/useTweetContext";

const TweetService = () => {
  const [isHeartFilled, setHeartFilled] = useState({});
  const [isCommentSectionVisible, setCommentSectionVisible] = useState({});
  const [isUserEditing, setIsUserEditing] = useState(false);
  const {
    tweets,
    setTweets,
    setFilteredTweetsData,
    setprofileToDisplay,
    userLogged,
  } = useTweetContext();
  const InputErrorMessage = "To pole nie może być puste!";
  const saveButtonValue = "Zapisz";

  const navigate = useNavigate();

  const heartButtonFunction = (id) => {
    toggleState(setHeartFilled, (prevHeartsFilled) => !prevHeartsFilled, id);
  };

  const showIconsAccordingToUsername = (
    username,
    userLogged,
    arrayName,
    sliceRange
  ) => (username === userLogged ? arrayName : arrayName.slice(0, sliceRange));

  const handleTweetsCommentsSection = (id) => {
    toggleState(
      setCommentSectionVisible,
      (prevSectionStatus) => !prevSectionStatus,
      id
    );
  };

  const handleEditMode = (id, contentTextArea) => {
    contentTextArea?.current[id].value &&
      toggleState(
        setIsUserEditing,
        (prevIsUserEditingState) => !prevIsUserEditingState,
        id
      );
  };

  const saveEdit = (id, contentTextArea) => {
    let input = contentTextArea?.current[id];
    const cacheInputClassName = input.className.includes("--error")
      ? input.className.replace(/--error/g, "")
      : input.className;
    const errorClassName = `${cacheInputClassName}--error`;

    if (cacheInputClassName === errorClassName) {
      return;
    }
    if (!input.value) {
      input.placeholder = InputErrorMessage;
      input.className = errorClassName;
      return;
    } else {
      setTweets((tweets) =>
        tweets.map((tweet) =>
          tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
        )
      );
      setFilteredTweetsData((tweets) =>
        tweets.map((tweet) =>
          tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
        )
      );
      handleEditMode(id, contentTextArea);
    }
  };

  const retweet = (content) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const deleleTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
    setFilteredTweetsData(tweets.filter((tweet) => tweet.id !== id));
  };

  const otherUsersProfileReference = (username) => {
    setprofileToDisplay(username);
    navigate("/Profile");
  };

  const deleteComment = (tweetId, commentId) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              comments: tweet.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : { ...tweet }
      )
    );

    setFilteredTweetsData((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              comments: tweet.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : { ...tweet }
      )
    );
  };

  return {
    userLogged,
    isHeartFilled,
    setHeartFilled,
    isCommentSectionVisible,
    setCommentSectionVisible,
    isUserEditing,
    setIsUserEditing,
    tweets,
    setTweets,
    InputErrorMessage,
    heartButtonFunction,
    showIconsAccordingToUsername,
    handleTweetsCommentsSection,
    handleEditMode,
    saveEdit,
    retweet,
    deleleTweet,
    deleteComment,
    saveButtonValue,
    otherUsersProfileReference,
  };
};

export default TweetService;
