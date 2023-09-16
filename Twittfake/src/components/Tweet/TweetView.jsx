/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames, handleLinesAmount } from "../../shared";
import React from "react";
import TweetComment from "../TweetComment/TweetComment";
import AddCommentAreaContainer from "../AddCommentArea/AddCommentAreaContainer";
import "./Tweet.scss";
import PropTypes from "prop-types";

const TweetView = (props) => (
  <article
    className={classNames([
      "tweet",
      props.theme === "isDark" && "tweet--isDark",
    ])}
    key={props.tweetId}
  >
    <h1
      className='tweet__username'
      onClick={() => props.otherUsersProfileReference(props.username)}
    >
      {props.username}{" "}
    </h1>
    <textarea
      className={classNames([
        "tweet__content",
        props.isUserEditing[props.tweetId] && "tweet__content--edit-mode",
      ])}
      defaultValue={props.content}
      ref={(ref) => (props.contentTextArea.current[props.tweetId] = ref)}
      maxLength={75}
      readOnly={!props.isUserEditing[props.tweetId]}
      onKeyDown={handleLinesAmount}
    ></textarea>
    <button
      className={classNames([
        "tweet__save-edit-button",
        props.isUserEditing[props.tweetId] && "tweet__save-edit-button--active",
      ])}
      onClick={() => props.saveEdit(props.tweetId, props.contentTextArea)}
    >
      {props.saveButtonValue}
    </button>
    <div className='tweet__reactions'>
      <img
        src={
          props.isHeartFilled[props.tweetId]
            ? props.fullHeart
            : props.emptyHeart
        }
        className='tweet__reactions__heart'
        onClick={() => props.heartButtonFunction(props.tweetId)}
      ></img>
      {props
        .showIconsAccordingToUsername(
          props.username,
          props.userLogged,
          props.icons,
          -2
        )
        .map((icon, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <span
                className={classNames([
                  "tweet__reactions__counter__heart",
                  props.isHeartFilled[props.tweetId] &&
                    "tweet__reactions__counter__heart--red",
                ])}
              >
                {props.isHeartFilled[props.tweetId] ? 2 : 1}
              </span>
            ) : null}
            {index === 1 ? (
              <span className='tweet__reactions__counter__comments'>
                {props.comments?.length ?? 0}
              </span>
            ) : null}
            <FontAwesomeIcon
              icon={icon}
              className={`tweet__reactions__${icon.iconName}`}
              onClick={() =>
                props.handleTweetsReactions[index](props.tweetId, props.content)
              }
            />
          </React.Fragment>
        ))}
    </div>
    {props.userLogged && (
      <div
        className={classNames([
          "comment-section",
          !props.isCommentSectionVisible[props.tweetId] &&
            "comment-section--isnt-visible",
        ])}
      >
        <AddCommentAreaContainer id={props.tweetId} />
        {props.comments?.map(({ id: commentId, username, content }) => (
          <TweetComment
            key={commentId}
            commentId={commentId}
            username={username}
            content={content}
            tweetId={props.tweetId}
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
  otherUsersProfileReference: PropTypes.func.isRequired,
  heartButtonFunction: PropTypes.func.isRequired,
  saveButtonValue: PropTypes.string.isRequired,
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
  userLogged: PropTypes.string.isRequired,
  isCommentSectionVisible: PropTypes.object.isRequired,
};

export default TweetView;
