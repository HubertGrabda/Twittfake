import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import TweetsData from "../../../mocks/MockTweets.json";
import { useLocation } from "react-router-dom";

const Feed = () => {
  const icons = [faHeart, faComment, faEdit, faRetweet, faTrashAlt];

  const iconClickHandlers = [
    () => console.log("Heart icon clicked"),
    () => console.log("Comment icon clicked"),
    () => console.log("Edit icon clicked"),
    () => console.log("Retweet icon clicked"),
    () => console.log("Delete icon clicked"),
  ];

  const path = useLocation();

  const hideOtherUsersTweets =
    path.pathname === "/Profile"
      ? TweetsData.tweets.filter((tweet) => tweet.username === "Twittfake_Dev")
      : TweetsData.tweets;

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
                  onClick={iconClickHandlers[index]}
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
