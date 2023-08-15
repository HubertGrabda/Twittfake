import { useContext } from "react";
import "./PopularMobile.scss";
import { TweetsContext } from "../../context/Tweet'sState";

const PopularMobile = () => {
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
    <div className='popularMobile'>
      {duplicates.slice(0, 4).map((element) => (
        <section className='popularMobile__tile' key={element}>
          <span className='popularMobile__tile__category'>{element}</span>
          <span className='popularMobile__tile__catch-phrase'> {element} </span>
          <span className='popularMobile__tile__amount-of-tweets'>
            Tweety: {countMap[element]}
          </span>
        </section>
      ))}
    </div>
  );
};

export default PopularMobile;
