import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faEdit,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import TweetsData from "../../../mocks/MockTweets.json";
import { useLocation } from "react-router-dom";

const Feed = () => {
  const icons = [faHeart, faComment, faEdit, faRetweet];

  const iconClickHandlers = [
    () => console.log("Heart icon clicked"),
    () => console.log("Comment icon clicked"),
    () => console.log("Edit icon clicked"),
    () => console.log("Retweet icon clicked"),
  ];

  const path = useLocation();

  const hideOtherUsersTweets =
    path.pathname === "/Profile"
      ? TweetsData.tweets.filter((tweet) => tweet.username === "Twittfake_Dev")
      : TweetsData.tweets;

  return (
    <section>
      {hideOtherUsersTweets.map((tweet) => (
        <article key={tweet.id}>
          <div className='tweet'>
            <h1 className='tweet_username'>{tweet.username}</h1>
            <p className='tweet_content'>{tweet.content}</p>
            <div className='tweet_reactions'>
              {icons.map((icon, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  key={index}
                  className='tweet_reactions__icon'
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
