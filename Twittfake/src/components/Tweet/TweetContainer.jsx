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
  const saveButtonValue = "Zapisz";

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
    otherUsersProfileReference,
  } = TweetService();

  const handleTweetsReactions = [
    (id) => handleTweetsCommentsSection(id),
    () => retweet(content),
    (id) => handleEditMode(id, contentTextArea),
    (id) => deleleTweet(id),
  ];

  return (
    <TweetView
      handleTweetsReactions={handleTweetsReactions}
      emptyHeart={emptyHeart}
      fullHeart={fullHeart}
      icons={icons}
      contentTextArea={contentTextArea}
      theme={theme}
      saveButtonValue={saveButtonValue}
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
      otherUsersProfileReference={otherUsersProfileReference}
      tweetId={tweetId}
      username={username}
      content={content}
      comments={comments}
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
