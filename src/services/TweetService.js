import { useState } from "react";
import { toggleState } from "../shared";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../hooks/useTweetContext";

const TweetService = () => {
  const [isHeartFilled, setIsHeartFilled] = useState({});
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState({});
  const [isUserEditing, setIsUserEditing] = useState(false);
  const {
    tweets,
    setTweets,
    setFilteredTweetsData,
    setProfileToDisplay,
    userLogged,
    setIsTagClicked,
  } = useTweetContext();
  const saveButtonValue = "Zapisz";
  const [errorOccured, setErrorOccured] = useState(false);

  const navigate = useNavigate();

  const showIconsAccordingToUsername = (username, arrayName, sliceRange) =>
    username === userLogged
      ? arrayName
      : arrayName.slice(0, sliceRange);

  const heartButtonFunction = (id) => {
    toggleState(setIsHeartFilled, (prevHeartsFilled) => !prevHeartsFilled, id);
  };

  const handleTweetsCommentsSection = (tweetId) => {
    toggleState(
      setIsCommentSectionVisible,
      (prevSectionStatus) => !prevSectionStatus,
      tweetId
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

    if (!input.value) {
      setErrorOccured(true);
      return;
    } else {
      setErrorOccured(false);
      setTweets((tweets) =>
        tweets.map((tweet) =>
          tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
        )
      );
      setFilteredTweetsData(tweets);
      handleEditMode(id, contentTextArea);
    }
  };

  const retweet = (content) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const deleleTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
    setFilteredTweetsData(updatedTweets);
  };

  const navigateToUsersProfile = (username) => {
    setProfileToDisplay(username);
    navigate("/Profile");
  };

  const deleteComment = (tweetId, commentId) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === tweetId
        ? {
            ...tweet,
            comments: tweet.comments.filter(
              (comment) => comment.id !== commentId
            ),
          }
        : { ...tweet }
    );
    setTweets(updatedTweets);
    setFilteredTweetsData(updatedTweets);
  };

  const filterTweets = (filterBy) => {
    const filteredResults = tweets.filter((item) =>
      item.content.toLowerCase().includes(filterBy.toLowerCase())
    );

    setIsTagClicked(true);
    setFilteredTweetsData(filteredResults);
  };

  return {
    userLogged,
    isHeartFilled,
    setIsHeartFilled,
    isCommentSectionVisible,
    setIsCommentSectionVisible,
    isUserEditing,
    setIsUserEditing,
    tweets,
    setTweets,
    heartButtonFunction,
    showIconsAccordingToUsername,
    handleTweetsCommentsSection,
    handleEditMode,
    saveEdit,
    retweet,
    deleleTweet,
    deleteComment,
    saveButtonValue,
    navigateToUsersProfile,
    filterTweets,
    errorOccured,
  };
};

export default TweetService;
