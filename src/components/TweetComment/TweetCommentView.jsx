import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SAVE_BUTTON_TEXT } from "../../const/input";
import { classNames, handleLinesAmount } from "../../shared";
import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import "./TweetComment.scss";
import PropTypes from "prop-types";

const TweetCommentView = ({
  commentId,
  username,
  content,
  tweetId,
  contentTextArea,
  isUserEditing,
  saveEdit,
  isHeartFilled,
  heartButtonFunction,
  showIconsAccordingToUsername,
  commentIcons,
  handleCommentsReactions,
  errorOccured,
}) => (
  <div key={commentId} className='comment'>
    <h4 className='comment__username'>{username}</h4>
    <textarea
      readOnly={!isUserEditing[commentId]}
      maxLength={50}
      onKeyDown={handleLinesAmount}
      className={classNames([
        "comment__content",
        isUserEditing[commentId] && "comment__content--edit-mode",
        errorOccured && "comment__content--edit-mode--error",
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
      {SAVE_BUTTON_TEXT}
    </button>
    <div className='comment__reactions'>
      <span
        className={classNames([
          "comment__reactions__counter__heart",
          isHeartFilled[commentId] && "comment__reactions__counter__heart--red",
        ])}
      >
        {isHeartFilled[commentId] ? 2 : 1}
      </span>
      <img
        src={isHeartFilled[commentId] ? fullHeart : emptyHeart}
        className='comment__reactions__heart'
        onClick={() => heartButtonFunction(commentId)}
      ></img>
      {showIconsAccordingToUsername(username, commentIcons, -2).map(
        (icon, index) => (
          <FontAwesomeIcon
            key={icon.iconName}
            icon={icon}
            className={`comment__reactions__${icon.iconName}`}
            onClick={() => handleCommentsReactions[index](tweetId, commentId)}
          />
        )
      )}
    </div>
  </div>
);

TweetCommentView.propTypes = {
  commentId: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isUserEditing: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  contentTextArea: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  saveEdit: PropTypes.func.isRequired,
  isHeartFilled: PropTypes.object.isRequired,
  heartButtonFunction: PropTypes.func.isRequired,
  commentIcons: PropTypes.array.isRequired,
  userLogged: PropTypes.string.isRequired,
  showIconsAccordingToUsername: PropTypes.func.isRequired,
  handleCommentsReactions: PropTypes.arrayOf(PropTypes.func).isRequired,
  tweetId: PropTypes.node.isRequired,
  errorOccured: PropTypes.bool,
};

export default TweetCommentView;
