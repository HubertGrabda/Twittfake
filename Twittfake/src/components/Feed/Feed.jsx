import "./Feed.scss";
import { useLocation } from "react-router-dom";
import Tweet from "../Tweet/Tweet";
import { useTweetContext } from "../../hooks/useTweetContext";

const Feed = () => {
  const { tweets, filteredTweetsData, profileToDisplay } = useTweetContext();
  const path = useLocation();

  const isItUsersProfile =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === profileToDisplay)
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
