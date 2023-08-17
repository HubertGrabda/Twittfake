import { useContext } from "react";
import "./PopularMobile.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { Link } from "react-router-dom";

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
        <Link to='/' className='tile' key={element}>
          <span className='tile__category'>{element}</span>
          <span className='tile__catch-phrase'> {element} </span>
          <span className='tile__amount-of-tweets'>
            Tweety: {countMap[element]}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PopularMobile;
