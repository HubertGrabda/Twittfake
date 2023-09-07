import "./Popular.scss";
import { useTheme } from "../../hooks/useTheme";
import { classNames, filterItems, popularTrendsFilter } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";

const Popular = () => {
  const { tweets, setFilteredTweetsData, setTagIsClicked } = useTweetContext();

  const { duplicates, countMap } = popularTrendsFilter(tweets);
  const { theme } = useTheme();

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
            onClick={() =>
              filterItems(
                tweets,
                element,
                setFilteredTweetsData,
                setTagIsClicked
              )
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
