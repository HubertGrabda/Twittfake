import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SAVE_BUTTON_TEXT } from "../../const/input";
import { classNames, handleLinesAmount } from "../../shared";
import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import "./TweetComment.scss";
import PropTypes from "prop-types";

const TweetCommentView = (props) => (
  <div key={props.commentId} className='comment'>
    <h3 className='comment__username'>{props.username}</h3>
    <textarea
      readOnly={!props.isUserEditing[props.commentId]}
      maxLength={50}
      onKeyDown={handleLinesAmount}
      className={classNames([
        "comment__content",
        props.isUserEditing[props.commentId] && "comment__content--edit-mode",
      ])}
      defaultValue={props.content}
      ref={(ref) => (props.contentTextArea.current[props.commentId] = ref)}
    ></textarea>
    <button
      className={classNames([
        "comment__submit-button",
        props.isUserEditing[props.commentId] &&
          "comment__submit-button--active",
      ])}
      onClick={() => props.saveEdit(props.commentId, props.contentTextArea)}
    >
      {SAVE_BUTTON_TEXT}
    </button>
    <div className='comment__reactions'>
      <span
        className={classNames([
          "comment__reactions__counter__heart",
          props.isHeartFilled[props.commentId] &&
            "comment__reactions__counter__heart--red",
        ])}
      >
        {props.isHeartFilled[props.commentId] ? 2 : 1}
      </span>
      <img
        src={props.isHeartFilled[props.commentId] ? fullHeart : emptyHeart}
        className='comment__reactions__heart'
        onClick={() => props.heartButtonFunction(props.commentId)}
      ></img>
      {props
        .showIconsAccordingToUsername(
          props.username,
          props.userLogged,
          props.commentIcons,
          -2
        )
        .map((icon, index) => (
          <FontAwesomeIcon
            key={icon.iconName}
            icon={icon}
            className={`comment__reactions__${icon.iconName}`}
            onClick={() =>
              props.handleCommentsReactions[index](
                props.tweetId,
                props.commentId
              )
            }
          />
        ))}
    </div>
  </div>
);

TweetCommentView.propTypes = {
  commentId: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isUserEditing: PropTypes.object.isRequired,
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
};

export default TweetCommentView;
