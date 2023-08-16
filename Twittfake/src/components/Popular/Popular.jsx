import "./Popular.scss";
import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";

const Popular = () => {
  const { tweets, setFilteredItems } = useContext(TweetsContext);

  const tileInnerHtmlValue = useRef([]);

  const hashtagsArray = [];
  const countMap = {};
  const duplicates = [];

  tweets.map((tweet) => {
    hashtagsArray.push(tweet?.hashtag ?? null);
  });

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
      {duplicates.map((element, index) => {
        return (
          <div
            className='popular__tile'
            key={element}
            onClick={() =>
              filterItems(
                tweets,
                tileInnerHtmlValue.current[index].innerHTML,
                setFilteredItems
              )
            }
          >
            <span
              className='popular__tile__catch-phrase'
              ref={(ref) => (tileInnerHtmlValue.current[index] = ref)}
            >
              #{element}
            </span>
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
