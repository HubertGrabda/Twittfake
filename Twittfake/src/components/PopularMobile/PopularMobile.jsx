import { useContext } from "react";
import "./PopularMobile.scss";
import { TweetsContext } from "../../context/TweetContext";
import { Link } from "react-router-dom";
import popularTrendsFilter from "../../shared/popularTrendsFilter";
import filterItems from "../../shared/filterItems";

const PopularMobile = () => {
  const { tweets, setFilteredTweetsData, setTagIsClicked } = useTweetContext();
  const { duplicates, countMap } = popularTrendsFilter(tweets);

  return (
    <div className='popularMobile'>
      {duplicates.slice(0, 4).map((element) => (
        <Link
          to='/SearchResult'
          className='tile'
          key={element}
          onClick={() =>
            filterItems(tweets, element, setFilteredTweetsData, setTagIsClicked)
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
