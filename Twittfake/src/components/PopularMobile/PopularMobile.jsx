import "./PopularMobile.scss";
import { Link } from "react-router-dom";
import { filterItems, popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";

const PopularMobile = () => {
  const { tweets, setFilteredTweetsData, setIsTagClicked } = useTweetContext();
  const { duplicates, countMap } = popularTrendsFilter(tweets);

  return (
    <div className='popularMobile'>
      {duplicates.slice(0, 4).map((element) => (
        <Link
          to='/SearchResult'
          className='tile'
          key={element}
          onClick={() =>
            filterItems(tweets, element, setFilteredTweetsData, setIsTagClicked)
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
