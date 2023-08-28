import "./Popular.scss";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";
import popularTrendsFilter from "../../functions/popularTrendsFilter";
import { useTheme } from "../../context/ThemeContext";
import { classNames } from "../../functions/classNames";

const Popular = () => {
  const { tweets, setFilteredItems, setTileIsClicked } =
    useContext(TweetsContext);

  const { duplicates, countMap } = popularTrendsFilter(tweets);
  const { theme } = useTheme();

  return (
    <section className={classNames([theme === "light" ? "popular" : "popular --dark"])}>
      {duplicates.map((element) => {
        return (
          <div
            className='popular__tile'
            key={element}
            onClick={() =>
              filterItems(tweets, element, setFilteredItems, setTileIsClicked)
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
