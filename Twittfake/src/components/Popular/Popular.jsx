import "./Popular.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";
import popularTrendsFilter from "../../functions/popularTrendsFilter";

const Popular = () => {
  const { tweets, setFilteredItems } = useContext(TweetsContext);

  const { duplicates, countMap } = popularTrendsFilter(tweets);

  return (
    <section className='popular'>
      {duplicates.map((element) => {
        return (
          <div
            className='popular__tile'
            key={element}
            onClick={() => filterItems(tweets, element, setFilteredItems)}
          >
            <span className='popular__tile__catch-phrase'>#{element}</span>
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
