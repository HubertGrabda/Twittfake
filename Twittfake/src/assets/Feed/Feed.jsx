import { useContext, useRef } from "react";
import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEdit,
  faHeart,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import { TweetsContext } from "../../context/Tweet'sState";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
  const { tweets, setTweets } = useContext(TweetsContext);
  const iconRef = useRef([]);

  const path = useLocation();
  const hideOtherUsersTweets =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === "Twittfake_Dev")
      : tweets;

  const icons = [faHeart, faComment, faEdit, faRetweet, faTrashAlt];

  console.log(iconRef.current);

  const handleClick = [
    () => console.log(),
    () => console.log("Comment has been clicked"),
    () => console.log("Edit has been clicked"),
    () => console.log("Retweet has been clicked"),
    (id) => setTweets(tweets.filter((tweet) => tweet.id !== id)),
  ];

  return (
    <section>
      {hideOtherUsersTweets.map(({ id, username, content }) => (
        <article key={id}>
          <div className='tweet'>
            <h1 className='tweet_username'>{username}</h1>
            <p className='tweet_content'>{content}</p>
            <div className='tweet_reactions'>
              {icons.map((icon, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  key={index}
                  className={`tweet_reactions__icon__${icon.iconName}`}
                  ref={(ref) => (iconRef.current[index] = ref)}
                  onClick={() => handleClick[index](id)}
                />
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Feed;
