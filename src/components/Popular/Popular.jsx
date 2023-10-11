import "./Popular.scss";
import { useTheme } from "../../hooks/useTheme";
import { classNames, popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";

const Popular = () => {
  const { tweets } = useTweetContext();
  const { popularHashtags, countObj } = popularTrendsFilter(tweets);
  const { theme } = useTheme();
  const { filterTweets } = TweetService();

  return (
    <section className='popular'>
      {popularHashtags.map((el) => {
        return (
          <div
            className={classNames([
              "popular__tile",
              theme === "dark" && "popular__tile--dark",
            ])}
            key={el}
            onClick={() => filterTweets(el)}
          >
            <span className='popular__tile__catch-phrase'>{el}</span>
            <span className='popular__tile__amount-of-tweets'>
              Tweety: {countObj[el]}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Popular;
