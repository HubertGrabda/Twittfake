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
  const iconRef = useRef([]);
  const path = useLocation();
  const [isHeartFilled, setHeartFilled] = useState({});
  const [isCommentSectionVisible, setCommentSectionVisible] = useState({});
  const icons = [faComment, faEdit, faRetweet, faTrashAlt];

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

  const handleClick = [
    (id) => handleTweetsCommentsSection(id),
    () => console.log("Edit has been clicked"),
    () => console.log("Retweet has been clicked"),
    (id) => deleleTweet(id),
  ];

  return (
    <section>
      {hideOtherUsersTweets.map(({ id, username, content, comments }) => (
        <article key={id}>
          <div className='tweet'>
            <h1 className='tweet_username'>{username}</h1>
            <p className='tweet_content'>{content}</p>
            <div className='tweet_reactions'>
              <img
                src={isHeartFilled[id] ? fullHeart : emptyHeart}
                className='tweet_reactions__heart'
                onClick={() => heartButtonFunction(id)}
              ></img>
              {icons.map((icon, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <span
                      className={`tweet_reactions__counter__${
                        isHeartFilled[id] ? "heart--red" : "heart"
                      }`}
                    >
                      1
                    </span>
                  ) : null}
                  {index === 1 ? (
                    <span className='tweet_reactions__counter__comments'>
                      {comments?.length ?? 0}
                    </span>
                  ) : null}
                  <FontAwesomeIcon
                    icon={icon}
                    className={`tweet_reactions__${icon.iconName}`}
                    ref={(ref) => (iconRef.current[index] = ref)}
                    onClick={() => handleClick[index](id)}
                  />
                </React.Fragment>
              ))}
            </div>
            <div
              className={
                isCommentSectionVisible[id]
                  ? "tweet__comment-section.is-visible"
                  : "tweet__comment-section"
              }
            >
              <AddCommentArea id={id} />
              {comments?.map(({ id, username, content }) => (
                <div key={id} className='tweet__comment-section__comment'>
                  <h3 className='tweet__comment-section__comment__username'>
                    {username}
                  </h3>
                  <div className='tweet__comment-section__comment__content'>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Feed;
