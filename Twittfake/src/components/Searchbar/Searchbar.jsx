import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../../shared";
import { useTheme } from "../../hooks/useTheme";
import { useTweetContext } from "../../hooks/useTweetContext";
import TweetService from "../../services/TweetService";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  const { tweets, setFilteredTweetsData, setIsTagClicked } = useTweetContext();
  const { theme } = useTheme();
  const { filterItems } = TweetService();

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      setFilteredTweetsData(tweets);
      setIsTagClicked(false);
    } else filterItems(inputValue);
  };

  return (
    <div className='searchbar'>
      <input
        className={classNames([
          "searchbar__input",
          theme === "isDark" && "searchbar__input--isDark",
        ])}
        placeholder={placeholderText}
        onChange={handleSearch}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar__icon' />
    </div>
  );
};

export default Searchbar;
