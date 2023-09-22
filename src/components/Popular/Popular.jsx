import "./Popular.scss";
import { useTheme } from "../../hooks/useTheme";
import { classNames, popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";

const Popular = () => {
  const { tweets } = useTweetContext();
  const { duplicates, countObj } = popularTrendsFilter(tweets);
  const { theme } = useTheme();
  const { filterTweets } = TweetService();

  return (
    <section className='popular'>
      {duplicates.map((element) => {
        return (
          <div
            className={classNames([
              "popular__tile",
              theme === "isDark" && "popular__tile--isDark",
            ])}
            key={element}
            onClick={() => filterTweets(element)}
          >
            <span className='popular__tile__catch-phrase'>#{element}</span>
            <span className='popular__tile__amount-of-tweets'>
              Tweety: {countObj[element]}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Popular;
