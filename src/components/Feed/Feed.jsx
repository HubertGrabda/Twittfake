import "./Feed.scss";
import { useLocation } from "react-router-dom";
import TweetContainer from "../Tweet/TweetContainer";
import { useTweetContext } from "../../hooks/useTweetContext";
import { profileRoute } from "../../const/routing";
import { useUserDataContext } from "../../hooks/useUserDataContext";

const Feed = () => {
  const { filteredTweetsData } = useTweetContext();
  const { profileToDisplay } = useUserDataContext();
  const path = useLocation();

  const tweets =
    path.pathname === profileRoute
      ? filteredTweetsData.filter(
          (tweet) => tweet.username === profileToDisplay
        )
      : filteredTweetsData || [];

  return (
    <section className='tweets-wrapper' data-testid='tweets-list'>
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
