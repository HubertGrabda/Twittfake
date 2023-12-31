import TweetService from "../../services/TweetService";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import { useRef } from "react";
import TweetCommentView from "./TweetCommentView";
import { useUserDataContext } from "../../hooks/useUserDataContext";

const TweetCommentContainer = ({ commentId, username, content, tweetId }) => {
  const contentTextArea = useRef([]);

  const { userLogged } = useUserDataContext();

  const {
    isUserEditing,
    saveEdit,
    saveButtonValue,
    isHeartFilled,
    heartButtonFunction,
    showIconsAccordingToUsername,
    deleteComment,
    handleEditMode,
    isError,
  } = TweetService();

  const handleCommentsReactions = [
    (id, commentsID) => handleEditMode(commentsID, contentTextArea),
    (id, commentId) => deleteComment(id, commentId),
  ];

  const commentIcons = [faEdit, faTrashAlt];

  return (
    <TweetCommentView
      commentId={commentId}
      username={username}
      content={content}
      tweetId={tweetId}
      contentTextArea={contentTextArea}
      userLogged={userLogged}
      isUserEditing={isUserEditing}
      saveEdit={saveEdit}
      saveButtonValue={saveButtonValue}
      isHeartFilled={isHeartFilled}
      heartButtonFunction={heartButtonFunction}
      showIconsAccordingToUsername={showIconsAccordingToUsername}
      deleteComment={deleteComment}
      handleEditMode={handleEditMode}
      commentIcons={commentIcons}
      handleCommentsReactions={handleCommentsReactions}
      isError={isError}
    />
  );
};

TweetCommentContainer.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tweetId: PropTypes.node.isRequired,
  commentId: PropTypes.node.isRequired,
};

export default TweetCommentContainer;
