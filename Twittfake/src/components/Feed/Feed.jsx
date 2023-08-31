import "./Feed.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import { useLocation } from "react-router-dom";
import Tweet from "../Tweet/Tweet";

const Feed = () => {
  const { tweets, filteredTweetsData, whosProfileToDisplay } =
    useContext(TweetsContext);
  const path = useLocation();

  const isItUsersProfile =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === whosProfileToDisplay)
      : filteredTweetsData;

  return (
    <section className='tweets-wrapper'>
      {isItUsersProfile.map(({ id: tweetId, username, content, comments }) => (
        <Tweet
          key={tweetId}
          tweetId={tweetId}
          username={username}
          content={content}
          comments={comments}
        />
      ))}
    </section>
  );
};

export default Feed;
