import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import {
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import TweetService from "../../services/TweetService";
import PropTypes from "prop-types";
import { useTheme } from "../../hooks/useTheme";
import TweetView from "./TweetView";

const TweetContainer = ({ tweetId, username, content, comments }) => {
  const icons = [faComment, faRetweet, faEdit, faTrashAlt];
  const contentTextArea = useRef([]);
  const { theme } = useTheme();

  const {
    userLogged,
    isHeartFilled,
    isCommentSectionVisible,
    isUserEditing,
    heartButtonFunction,
    showIconsAccordingToUsername,
    handleTweetsCommentsSection,
    handleEditMode,
    saveEdit,
    retweet,
    deleleTweet,
    navigateToUsersProfile,
    isError,
  } = TweetService();

  const handleTweetsReactions = [
    (tweetId) => handleTweetsCommentsSection(tweetId),
    () => retweet(content),
    (tweetId) => handleEditMode(tweetId, contentTextArea),
    (tweetId) => deleleTweet(tweetId),
  ];

  return (
    <TweetView
      handleTweetsReactions={handleTweetsReactions}
      emptyHeart={emptyHeart}
      fullHeart={fullHeart}
      icons={icons}
      contentTextArea={contentTextArea}
      theme={theme}
      userLogged={userLogged}
      isHeartFilled={isHeartFilled}
      isCommentSectionVisible={isCommentSectionVisible}
      isUserEditing={isUserEditing}
      heartButtonFunction={heartButtonFunction}
      showIconsAccordingToUsername={showIconsAccordingToUsername}
      handleTweetsCommentsSection={handleTweetsCommentsSection}
      handleEditMode={handleEditMode}
      saveEdit={saveEdit}
      retweet={retweet}
      deleleTweet={deleleTweet}
      navigateToUsersProfile={navigateToUsersProfile}
      tweetId={tweetId}
      username={username}
      content={content}
      comments={comments}
      isError={isError}
    />
  );
};

TweetContainer.propTypes = {
  tweetId: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default TweetContainer;
