import TweetService from "../../services/TweetService";
import "./TweetComment.scss";
import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import { useRef } from "react";
import { classNames, handleLinesAmount } from "../../shared";

const TweetComment = ({ commentId, username, content, tweetId }) => {
  const tweetService = TweetService();
  const contentTextArea = useRef([]);

  const {
    userLogged,
    isUserEditing,
    saveEdit,
    saveButtonValue,
    isHeartFilled,
    heartButtonFunction,
    showIconsAccordingToUsername,
    deleteComment,
    handleEditMode,
  } = tweetService;

  const handleCommentsReactions = [
    (id, commentsID) => handleEditMode(commentsID, contentTextArea),
    (id, commentId) => deleteComment(id, commentId),
  ];

  const commentIcons = [faEdit, faTrashAlt];

  return (
    <div key={commentId} className='comment'>
      <h3 className='comment__username'>{username}</h3>
      <textarea
        readOnly={!isUserEditing[commentId]}
        maxLength={50}
        onKeyDown={handleLinesAmount}
        className={classNames([
          "comment__content",
          isUserEditing[commentId] && "comment__content--edit-mode",
        ])}
        defaultValue={content}
        ref={(ref) => (contentTextArea.current[commentId] = ref)}
      ></textarea>
      <button
        className={classNames([
          "comment__submit-button",
          isUserEditing[commentId] && "comment__submit-button--active",
        ])}
        onClick={() => saveEdit(commentId, contentTextArea)}
      >
        {saveButtonValue}
      </button>
      <div className='comment__reactions'>
        <span
          className={classNames([
            "comment__reactions__counter__heart",
            isHeartFilled[commentId] &&
              "comment__reactions__counter__heart--red",
          ])}
        >
          {isHeartFilled[commentId] ? 2 : 1}
        </span>
        <img
          src={isHeartFilled[commentId] ? fullHeart : emptyHeart}
          className='comment__reactions__heart'
          onClick={() => heartButtonFunction(commentId)}
        ></img>
        {showIconsAccordingToUsername(
          username,
          userLogged,
          commentIcons,
          -2
        ).map((icon, index) => (
          <FontAwesomeIcon
            key={icon.iconName}
            icon={icon}
            className={`comment__reactions__${icon.iconName}`}
            onClick={() => handleCommentsReactions[index](tweetId, commentId)}
          />
        ))}
      </div>
    </div>
  );
};

TweetComment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tweetId: PropTypes.node.isRequired,
  commentId: PropTypes.node.isRequired,
};

export default TweetComment;
