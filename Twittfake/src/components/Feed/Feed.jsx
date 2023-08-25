import "./Feed.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import { useLocation } from "react-router-dom";
import Tweet from "../Tweet/Tweet";
import useGetUsername from "../../hooks/useGetUsername";

const Feed = () => {
  const { tweets, filteredItems } = useContext(TweetsContext);
  const path = useLocation();
  const userLogged = useGetUsername();

  const isItUsersProfile =
    path.pathname === "/Profile"
      ? tweets.filter((tweet) => tweet.username === userLogged)
      : filteredItems;

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
