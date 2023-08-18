import { useContext } from "react";
import "./PopularMobile.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { Link } from "react-router-dom";
import popularTrendsFilter from "../../functions/popularTrendsFilter";
import filterItems from "../../functions/filterItems";

const PopularMobile = () => {
  const { tweets, setFilteredItems } = useContext(TweetsContext);
  const { duplicates, countMap } = popularTrendsFilter(tweets);

  return (
    <div className='popularMobile'>
      {duplicates.slice(0, 4).map((element) => (
        <Link
          to='/'
          className='tile'
          key={element}
          onClick={() => filterItems(tweets, element, setFilteredItems)}
        >
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
