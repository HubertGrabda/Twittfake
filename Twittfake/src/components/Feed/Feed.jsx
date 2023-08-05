import React, { useContext, useRef, useState } from "react";
import "./Feed.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import { TweetsContext } from "../../context/Tweet'sState";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import emptyHeart from "../../images/heart_empty.png";
import fullHeart from "../../images/heart_full.png";
import updateStateByKey from "../../functions/updateStateByKey";
import AddCommentArea from "../AddCommentArea/AddCommentArea";
import handleLinesAmount from "../../functions/handleLinesAmount";
import retweet from "../../functions/retweetFunction";

const Feed = () => {
  const { tweets, setTweets } = useContext(TweetsContext);
  const path = useLocation();

  const hideOtherUsersTweets =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === "Twittfake_Dev")
      : tweets;

  const icons = [faComment, faEdit, faRetweet, faTrashAlt];
  const commentIcons = [faEdit, faTrashAlt];
  const contentTextArea = useRef([]);
  const [isHeartFilled, setHeartFilled] = useState({});
  const [isCommentSectionVisible, setCommentSectionVisible] = useState({});
  const [isUserEditing, setIsUserEditing] = useState(false);
  const saveButtonValue = "Zapisz";
  const InputErrorMessage = "To pole nie może być puste!";

  const heartButtonFunction = (id) => {
    setHeartFilled(
      updateStateByKey((prevHeartsFilled) => !prevHeartsFilled, id)
    );
  };

  const handleEditMode = (id) => {
    contentTextArea.current[id].value.trim() === ""
      ? ""
      : setIsUserEditing(
          updateStateByKey(
            (prevIsUserEditingState) => !prevIsUserEditingState,
            id
          )
        );
  };

  const saveEdit = (id) => {
    let input = contentTextArea.current[id];

    if (input.value.trim() === "") {
      input.placeholder = InputErrorMessage;
      input.className = "tweet__content--edit-mode--error";
      return;
    } else input.value;

    setTweets((tweets) =>
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: input.value } : { ...tweet }
      )
    );

    handleEditMode(id);
  };

  const handleTweetsCommentsSection = (id) => {
    setCommentSectionVisible(
      updateStateByKey((prevSectionStatus) => !prevSectionStatus, id)
    );
  };

  const deleleTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  const deleteComment = (tweetId, commentId) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              comments: tweet.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : { ...tweet }
      )
    );
  };

  const handleTweetsReactions = [
    (id) => handleTweetsCommentsSection(id),
    (id) => handleEditMode(id),
    (id, content) => retweet(content),
    (id) => deleleTweet(id),
  ];

  const handleCommentsReactions = [
    (id, commentsID) => handleEditMode(commentsID),
    (id, commentId) => deleteComment(id, commentId),
  ];

  return (
    <section>
      {hideOtherUsersTweets.map(
        ({ id: tweetId, username, content, comments }) => (
          <article key={tweetId}>
            <div className='tweet'>
              <h1 className='tweet__username'>{username}</h1>
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
                onClick={() => saveEdit(tweetId)}
              >
                {saveButtonValue}
              </button>
              <div className='tweet__reactions'>
                <img
                  src={isHeartFilled[tweetId] ? fullHeart : emptyHeart}
                  className='tweet__reactions__heart'
                  onClick={() => heartButtonFunction(tweetId)}
                ></img>
                {icons.map((icon, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <span
                        className={`tweet__reactions__counter__${
                          isHeartFilled[tweetId] ? "heart--red" : "heart"
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
                      onClick={() =>
                        handleTweetsReactions[index](tweetId, content)
                      }
                    />
                  </React.Fragment>
                ))}
              </div>
              <div
                className={
                  isCommentSectionVisible[tweetId]
                    ? "tweet__comment-section.is-visible"
                    : "tweet__comment-section"
                }
              >
                <AddCommentArea id={tweetId} />
                {comments?.map(({ id: commentId, username, content }) => (
                  <div
                    key={commentId}
                    className='tweet__comment-section__comment'
                  >
                    <h3 className='tweet__comment-section__comment__username'>
                      {username}
                    </h3>

                    <textarea
                      readOnly={!isUserEditing[commentId]}
                      maxLength={50}
                      onKeyDown={handleLinesAmount}
                      className={`tweet__comment-section__comment__content${
                        isUserEditing[commentId] ? "--edit-mode" : ""
                      }`}
                      defaultValue={content}
                      ref={(ref) => (contentTextArea.current[commentId] = ref)}
                    ></textarea>
                    <button
                      className={`tweet__comment-section__comment__submit-button${
                        isUserEditing[commentId] ? "--active" : ""
                      }`}
                      onClick={() => saveEdit(commentId)}
                    >
                      {saveButtonValue}
                    </button>
                    <div className='tweet__comment-section__comment__reactions'>
                      <span
                        className={`tweet__comment-section__comment__reactions__counter__${
                          isHeartFilled[commentId] ? "heart--red" : "heart"
                        }`}
                      >
                        {isHeartFilled[commentId] ? 2 : 1}
                      </span>
                      <img
                        src={isHeartFilled[commentId] ? fullHeart : emptyHeart}
                        className='tweet__comment-section__comment__reactions__heart'
                        onClick={() => heartButtonFunction(commentId)}
                      ></img>
                      {commentIcons.map((icon, index) => (
                        <FontAwesomeIcon
                          key={icon.iconName}
                          icon={icon}
                          className={`tweet__comment-section__comment__reactions__${icon.iconName}`}
                          onClick={() =>
                            handleCommentsReactions[index](tweetId, commentId)
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )
      )}
    </section>
  );
};

export default Feed;
