import "./Popular.scss";
import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";
import popularTrendsFilter from "../../functions/popularTrendsFilter";

const Popular = () => {
  const { tweets, setFilteredItems } = useContext(TweetsContext);
  const tileInnerHtmlValue = useRef([]);

  const { duplicates, countMap } = popularTrendsFilter(tweets);

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
