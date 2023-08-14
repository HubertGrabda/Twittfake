import "./Popular.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";

const Popular = () => {
  const { tweets } = useContext(TweetsContext);

  const hashtagsArray = [];

  tweets.map((tweet) => {
    hashtagsArray.push(tweet?.hashtag ?? null);
  });

  const countMap = {};
  const duplicates = [];

  hashtagsArray.forEach((hashtag) => {
    if (hashtag !== null) {
      countMap[hashtag] = (countMap[hashtag] ?? 0) + 1;
      if (countMap[hashtag] === 2) {
        duplicates.push(hashtag);
      }
    }
  });

  return (
    <section className='popular'>
      {duplicates.map((element) => {
        return (
          <div className='popular__tile' key={element}>
            <span className='popular__tile__catch-phrase'> #{element} </span>
            <span className='popular__tile__amount-of-tweets'>
              Tweety: {countMap[element]}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Popular;
