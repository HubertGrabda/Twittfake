import { useState } from "react";
import { toggleState } from "../shared";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../hooks/useTweetContext";
import { profileRoute } from "../const/routing";
import { useUserDataContext } from "../hooks/useUserDataContext";

const TweetService = () => {
  const [isHeartFilled, setIsHeartFilled] = useState({});
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState({});
  const [isUserEditing, setIsUserEditing] = useState(false);
  const { tweets, setTweets, setFilteredTweetsData, setIsTagClicked } =
    useTweetContext();
  const { userLogged, setProfileToDisplay } = useUserDataContext();
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const showIconsAccordingToUsername = (username, arrayName, sliceRange) =>
    username === userLogged ? arrayName : arrayName.slice(0, sliceRange);

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

    if (!input.value) return setIsError(true);

    setIsError(false);
    setTweets((tweets) =>
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
      )
    );
    setFilteredTweetsData(tweets);
    handleEditMode(id, contentTextArea);
  };

  const retweet = (content) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const deleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
    setFilteredTweetsData(updatedTweets);
  };

  const navigateToUsersProfile = (username) => {
    setProfileToDisplay(username);
    navigate(profileRoute);
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

  const handleSearch = (event) => {
    const inputValue = event.target.value;

    if (!inputValue) {
      setFilteredTweetsData(tweets);
      setIsTagClicked(false);
      return;
    }

    filterTweets(inputValue);
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
    deleteTweet,
    deleteComment,
    navigateToUsersProfile,
    filterTweets,
    isError,
    handleSearch,
  };
};

export default TweetService;
