/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames, handleLinesAmount } from "../../shared";
import React from "react";
import TweetCommentContainer from "../TweetComment/TweetComment";
import AddCommentAreaContainer from "../AddCommentArea/AddCommentAreaContainer";
import "./Tweet.scss";
import PropTypes from "prop-types";
import { SAVE_BUTTON_TEXT } from "../../const/input";

const TweetView = ({
  handleTweetsReactions,
  emptyHeart,
  fullHeart,
  icons,
  contentTextArea,
  theme,
  userLogged,
  isHeartFilled,
  isCommentSectionVisible,
  isUserEditing,
  heartButtonFunction,
  showIconsAccordingToUsername,
  saveEdit,
  navigateToUsersProfiles,
  tweetId,
  username,
  content,
  comments,
  errorOccured,
}) => (
  <article
    className={classNames(["tweet", theme === "isDark" && "tweet--isDark"])}
    key={tweetId}
  >
    <h3
      className='tweet__username'
      onClick={() => navigateToUsersProfiles(username)}
    >
      {username}{" "}
    </h3>
    <textarea
      className={classNames([
        "tweet__content",
        isUserEditing[tweetId] && "tweet__content--edit-mode",
        errorOccured && "tweet__content--edit-mode--error",
      ])}
      defaultValue={content}
      ref={(ref) => (contentTextArea.current[tweetId] = ref)}
      maxLength={75}
      readOnly={!isUserEditing[tweetId]}
      onKeyDown={handleLinesAmount}
    ></textarea>
    <button
      className={classNames([
        "tweet__save-edit-button",
        isUserEditing[tweetId] && "tweet__save-edit-button--active",
      ])}
      onClick={() => saveEdit(tweetId, contentTextArea)}
    >
      {SAVE_BUTTON_TEXT}
    </button>
    <div className='tweet__reactions'>
      <img
        src={isHeartFilled[tweetId] ? fullHeart : emptyHeart}
        className='tweet__reactions__heart'
        onClick={() => heartButtonFunction(tweetId)}
      ></img>
      {showIconsAccordingToUsername(username, icons, -2).map((icon, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <span
              className={classNames([
                "tweet__reactions__counter__heart",
                isHeartFilled[tweetId] &&
                  "tweet__reactions__counter__heart--red",
              ])}
            >
              {isHeartFilled[tweetId] ? 2 : 1}
            </span>
          ) : null}
          {index === 1 ? (
            <span className='tweet__reactions__counter__comments'>
              {comments?.length ?? 0}
            </span>
          ) : null}
          <FontAwesomeIcon
            icon={icon}
            className={`tweet__reactions__${icon.iconName}`}
            onClick={() => handleTweetsReactions[index](tweetId, content)}
          />
        </React.Fragment>
      ))}
    </div>
    {userLogged && (
      <div
        className={classNames([
          "comment-section",
          !isCommentSectionVisible[tweetId] && "comment-section--isnt-visible",
        ])}
      >
        <AddCommentAreaContainer tweetId={tweetId} />
        {comments?.map(({ id: commentId, username, content }) => (
          <TweetCommentContainer
            key={commentId}
            commentId={commentId}
            username={username}
            content={content}
            tweetId={tweetId}
          />
        ))}
      </div>
    )}
  </article>
);

TweetView.propTypes = {
  theme: PropTypes.string.isRequired,
  tweetId: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentTextArea: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  saveEdit: PropTypes.func.isRequired,
  navigateToUsersProfiles: PropTypes.func.isRequired,
  heartButtonFunction: PropTypes.func.isRequired,
  isHeartFilled: PropTypes.object.isRequired,
  emptyHeart: PropTypes.string.isRequired,
  fullHeart: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  showIconsAccordingToUsername: PropTypes.func.isRequired,
  handleTweetsReactions: PropTypes.arrayOf(PropTypes.func).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  userLogged: PropTypes.node,
  isCommentSectionVisible: PropTypes.object.isRequired,
};

export default TweetView;
