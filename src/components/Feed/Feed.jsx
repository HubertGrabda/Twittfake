import "./Feed.scss";
import { useLocation } from "react-router-dom";
import TweetContainer from "../Tweet/TweetContainer";
import { useTweetContext } from "../../hooks/useTweetContext";

const Feed = () => {
  const { filteredTweetsData, profileToDisplay} = useTweetContext();
  const path = useLocation();

  const tweets =
    path.pathname === "/Profile"
      ? filteredTweetsData.filter(
          (tweet) => tweet.username === profileToDisplay
        )
      : filteredTweetsData;

  return (
    <section className='tweets-wrapper'>
      {tweets.map(({ id: tweetId, username, content, comments }) => (
        <TweetContainer
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
