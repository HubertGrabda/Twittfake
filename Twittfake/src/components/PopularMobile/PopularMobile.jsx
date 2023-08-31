import { useContext } from "react";
import "./PopularMobile.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { Link } from "react-router-dom";
import popularTrendsFilter from "../../functions/popularTrendsFilter";
import filterItems from "../../functions/filterItems";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../functions/classNames";

const PopularMobile = () => {
  const { tweets, setFilteredTweetsData, setTileIsClicked } =
    useContext(TweetsContext);
  const { duplicates, countMap } = popularTrendsFilter(tweets);
  const { theme } = useTheme();

  return (
    <div
      className={classNames([
        theme === "light" ? "popularMobile" : "popularMobile --dark",
      ])}
    >
      {duplicates.slice(0, 4).map((element) => (
        <Link
          to='/SearchResult'
          className='tile'
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
          <span className='tile__category'>{element}</span>
          <span className='tile__catch-phrase'> #{element} </span>
          <span className='tile__amount-of-tweets'>
            Tweety: {countMap[element]}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PopularMobile;
