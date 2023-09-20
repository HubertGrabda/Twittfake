import "./PopularMobile.scss";
import { Link } from "react-router-dom";
import { popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";

const PopularMobile = () => {
  const { tweets } = useTweetContext();
  const { duplicates, countObj } = popularTrendsFilter(tweets);
  const { filterItems } = TweetService();

  return (
    <div className='popularMobile'>
      {duplicates.slice(0, 4).map((element) => (
        <Link
          to='/SearchResult'
          className='tile'
          key={element}
          onClick={() => filterItems(element)}
        >
          <span className='tile__category'>{element}</span>
          <span className='tile__catch-phrase'> #{element} </span>
          <span className='tile__amount-of-tweets'>
            Tweety: {countObj[element]}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PopularMobile;
