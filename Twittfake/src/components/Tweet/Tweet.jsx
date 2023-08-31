import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import AddCommentArea from "../AddCommentArea/AddCommentArea";
import handleLinesAmount from "../../functions/handleLinesAmount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import TweetService from "../../services/TweetService";
import PropTypes from "prop-types";
import "./Tweet.scss";
import TweetComment from "../TweetComment/TweetComment";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../functions/classNames";

const Tweet = ({ tweetId, username, content, comments }) => {
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
    otherUsersProfileReference,
  } = TweetService();

  const saveButtonValue = "Zapisz";

  const handleTweetsReactions = [
    (id) => handleTweetsCommentsSection(id),
    (id, content) => retweet(content),
    (id) => handleEditMode(id, contentTextArea),
    (id) => deleleTweet(id),
  ];

  return (
    <article
className={classNames([theme === 'light' ? 'tweet': 'tweet --dark'])}
      key={tweetId}
    >
      <h1
        className='tweet__username'
        onClick={() => otherUsersProfileReference(username)}
      >
        {username}{" "}
      </h1>
      <textarea
        className={`tweet__content${
          isUserEditing[tweetId] ? "--edit-mode" : ""
        }`}
        defaultValue={content}
        ref={(ref) => (contentTextArea.current[tweetId] = ref)}
        maxLength={100}
        rows={2}
        readOnly={!isUserEditing[tweetId]}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className={`tweet__save-edit-button${
          isUserEditing[tweetId] ? "--active" : ""
        }`}
        onClick={() => saveEdit(tweetId, contentTextArea)}
      >
        {saveButtonValue}
      </button>
      <div className='tweet__reactions'>
        <img
          src={isHeartFilled[tweetId] ? fullHeart : emptyHeart}
          className='tweet__reactions__heart'
          onClick={() => heartButtonFunction(tweetId)}
        ></img>
        {showIconsAccordingToUsername(username, userLogged, icons, -2).map(
          (icon, index) => (
            <React.Fragment key={index}>
              {index === 0 ? (
                <span
                  className={`tweet__reactions__counter__${
                    isHeartFilled[tweetId] ? "heart --red" : "heart"
                  }`}
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
          )
        )}
      </div>
      <div
        className={
          isCommentSectionVisible[tweetId]
            ? "comment-section"
            : "comment-section--isnt-visible"
        }
      >
        <AddCommentArea id={tweetId} />
        {comments?.map(({ id: commentId, username, content }) => (
          <TweetComment
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
};

Tweet.propTypes = {
  tweetId: PropTypes.number.isRequired,
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

export default Tweet;
