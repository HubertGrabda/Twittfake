/* eslint-disable no-unused-vars */
import { useState, useContext, useRef } from "react";
import toggleState from "../functions/toggleState";
import { TweetsContext } from "../context/Tweet'sState";
import { useNavigate } from "react-router-dom";
import getUsername from "../functions/useGetUsername";

const TweetService = () => {
  const userLogged = getUsername();

  const [isHeartFilled, setHeartFilled] = useState({});
  const [isCommentSectionVisible, setCommentSectionVisible] = useState({});
  const [isUserEditing, setIsUserEditing] = useState(false);
  const { tweets, setTweets, setFilteredItems, setWhosProfileToDisplay } =
    useContext(TweetsContext);
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
    contentTextArea?.current[id].value.trim() === ""
      ? ""
      : toggleState(
          setIsUserEditing,
          (prevIsUserEditingState) => !prevIsUserEditingState,
          id
        );
  };

  const saveEdit = (id, contentTextArea) => {
    let input = contentTextArea.current[id];

    if (input.value.trim() === "") {
      input.placeholder = InputErrorMessage;
      input.className = "tweet__content--edit-mode--error";
      return;
    } else input.value;

    setTweets((tweets) =>
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
      )
    );
    setFilteredItems((tweets) =>
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
      )
    );

    handleEditMode(id);
  };

  const retweet = (content) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const deleleTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
    setFilteredItems(tweets.filter((tweet) => tweet.id !== id));
  };

  const otherUsersProfileReference = (username) => {
    setWhosProfileToDisplay(username);
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

    setFilteredItems((prevTweets) =>
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
