import React, { useContext, useRef, useState } from "react";
import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import { TweetsContext } from "../../context/Tweet'sState";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import emptyHeart from "../images/heart_empty.png";
import fullHeart from "../images/heart_full.png";
import updateStateByKey from "../../functions/updateStateByKey";
import AddCommentArea from "../AddCommentArea/AddCommentArea";

const Feed = () => {
  const { tweets, setTweets } = useContext(TweetsContext);
  const reactionIconsRef = useRef([]);
  const commentsIconsRef = useRef([]);
  const path = useLocation();
  const [isHeartFilled, setHeartFilled] = useState({});
  const [isCommentSectionVisible, setCommentSectionVisible] = useState({});
  const icons = [faComment, faEdit, faRetweet, faTrashAlt];
  const commentIcons = [faEdit, faTrashAlt];

  const hideOtherUsersTweets =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === "Twittfake_Dev")
      : tweets;

  const heartButtonFunction = (id) => {
    setHeartFilled(
      updateStateByKey((prevHeartsFilled) => !prevHeartsFilled, id)
    );
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
    () => console.log("Edit has been clicked"),
    () => console.log("Retweet has been clicked"),
    (id) => deleleTweet(id),
  ];

  const handleCommentsReactions = [
    () => console.log("Edit has been clicked"),
    (id, commentId) => deleteComment(id, commentId),
  ];

  return (
    <section>
      {hideOtherUsersTweets.map(
        ({ id: tweetId, username, content, comments }) => (
          <article key={tweetId}>
            <div className='tweet'>
              <h1 className='tweet__username'>{username}</h1>
              <text className='tweet__content'>{content}</text>
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
                        10000
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
                      ref={(ref) => (reactionIconsRef.current[index] = ref)}
                      onClick={() => handleTweetsReactions[index](tweetId)}
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
                    <div className='tweet__comment-section__comment__content'>
                      {content}
                    </div>
                    <div className='tweet__comment-section__reactions'>
                      <span
                        className={`tweet__comment-section__reactions__counter__${
                          isHeartFilled[commentId] ? "heart--red" : "heart"
                        }`}
                      >
                        1
                      </span>
                      <img
                        src={isHeartFilled[commentId] ? fullHeart : emptyHeart}
                        className='tweet__comment-section__reactions__heart'
                        onClick={() => heartButtonFunction(commentId)}
                      ></img>
                      {commentIcons.map((icon, index) => (
                        <FontAwesomeIcon
                          key={icon.iconName}
                          icon={icon}
                          className={`tweet__reactions__${icon.iconName}`}
                          onClick={() =>
                            handleCommentsReactions[index](tweetId, commentId)
                          }
                          ref={(ref) => (commentsIconsRef.current[index] = ref)}
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
