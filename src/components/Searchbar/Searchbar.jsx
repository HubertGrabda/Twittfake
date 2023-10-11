import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../../shared";
import { useTheme } from "../../hooks/useTheme";
import TweetService from "../../services/TweetService";
import { SEARCH_BAR_PLACEHOLDER } from "../../const/input";

const SearchBar = () => {
  const { theme } = useTheme();
  const { handleSearch } = TweetService();

  return (
    <div className='search-bar'>
      <input
        className={classNames([
          "search-bar__input",
          theme === "dark" && "search-bar__input--dark",
        ])}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        onChange={handleSearch}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-bar__icon' />
    </div>
  );
};

export default SearchBar;
