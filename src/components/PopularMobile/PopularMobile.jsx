import "./PopularMobile.scss";
import { Link } from "react-router-dom";
import { popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";
import { searchResultRoute } from "../../const/routing";

const PopularMobile = () => {
  const { tweets } = useTweetContext();
  const { popularHashtags, countObj } = popularTrendsFilter(tweets);
  const { filterTweets } = TweetService();

  return (
    <div className='popularMobile'>
      {popularHashtags.slice(0, 4).map((element) => (
        <Link
          to={searchResultRoute}
          className='tile'
          key={element}
          onClick={() => filterTweets(element)}
        >
          <span className='tile__category'>{element}</span>
          <span className='tile__catch-phrase'> {element} </span>
          <span className='tile__amount-of-tweets'>
            Tweety: {countObj[element]}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PopularMobile;
