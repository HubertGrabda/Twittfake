/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames, handleLinesAmount, handleRowsAmount } from "../../shared";
import React from "react";
import TweetCommentContainer from "../TweetComment/TweetComment";
import AddCommentAreaContainer from "../AddCommentArea/AddCommentAreaContainer";
import "./Tweet.scss";
import PropTypes from "prop-types";
import {
  INPUT_LENGTH,
  SAVE_BUTTON_TEXT,
  TWEET_LIKED,
  TWEET_UNLIKED,
} from "../../const/input";

const TweetView = ({
  handleTweetsReactions,
  emptyHeart: emptyHeartSrc,
  fullHeart: fullHeartSrc,
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
  navigateToUsersProfile,
  tweetId,
  username,
  content,
  comments,
  isError,
}) => (
  <article
    className={classNames(["tweet", theme === "dark" && "tweet--dark"])}
    key={tweetId}
  >
    <h3
      className='tweet__username'
      onClick={() => navigateToUsersProfile(username)}
    >
      {username}
    </h3>
    <textarea
      className={classNames([
        "tweet__content",
        isUserEditing[tweetId] && "tweet__content--edit-mode",
        isError && "tweet__content--edit-mode-error",
      ])}
      ref={(ref) => (contentTextArea.current[tweetId] = ref)}
      maxLength={INPUT_LENGTH}
      readOnly={!isUserEditing[tweetId]}
      onKeyDown={handleLinesAmount}
      rows={handleRowsAmount(content)}
    >
      {content}
    </textarea>
    <button
      className={classNames([
        "tweet__save-edit-button",
        isUserEditing[tweetId] && "tweet__save-edit-button--active",
      ])}
      onClick={() => saveEdit(tweetId, contentTextArea)}
    >
      {SAVE_BUTTON_TEXT}
    </button>
    <div className='reactions'>
      {userLogged && (
        <>
          <span
            className={classNames([
              "span-color",
              isHeartFilled[tweetId] && "span-color--red",
            ])}
          >
            {isHeartFilled[tweetId] ? TWEET_LIKED : TWEET_UNLIKED}
          </span>
          <img
            src={isHeartFilled[tweetId] ? fullHeartSrc : emptyHeartSrc}
            className='reactions__heart'
            onClick={() => heartButtonFunction(tweetId)}
          ></img>
        </>
      )}
      {showIconsAccordingToUsername(username, icons, userLogged ? 2 : 1).map(
        (icon, index) => {
          const { iconName } = icon;
          return (
            <React.Fragment key={index}>
              {index === 0 ? <span>{comments?.length ?? 0}</span> : null}
              <FontAwesomeIcon
                icon={icon}
                className={`reactions__${iconName}`}
                onClick={() => handleTweetsReactions[index](tweetId, content)}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
    <div
      className={classNames([
        "comment-section",
        !isCommentSectionVisible[tweetId] && "comment-section--not-visible",
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
  navigateToUsersProfile: PropTypes.func.isRequired,
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
