import "./Popular.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";
import popularTrendsFilter from "../../functions/popularTrendsFilter";
import { classNames } from "../../functions/classNames";
import { useTheme } from "../../hooks/useTheme";

const Popular = () => {
  const { tweets, setFilteredTweetsData, setTileIsClicked } =
    useContext(TweetsContext);

  const { duplicates, countMap } = popularTrendsFilter(tweets);
  const { theme } = useTheme();

  return (
    <section
      className={classNames([theme === "light" ? "popular" : "popular --dark"])}
    >
      {duplicates.map((element) => {
        return (
          <div
            className='popular__tile'
            key={element}
            onClick={() =>
              filterItems(
                tweets,
                element,
                setFilteredTweetsData,
                setTileIsClicked
              )
            }
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
