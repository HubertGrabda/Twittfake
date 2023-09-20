import "./Popular.scss";
import { useTheme } from "../../hooks/useTheme";
import { classNames, popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";

const Popular = () => {
  const { tweets } = useTweetContext();
  const { duplicates, countMap } = popularTrendsFilter(tweets);
  const { theme } = useTheme();
  const { filterItems } = TweetService();

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
            onClick={() => filterItems(element)}
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
