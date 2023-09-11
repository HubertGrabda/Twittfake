import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { classNames, filterItems } from "../../shared";
import { useTheme } from "../../hooks/useTheme";
import { useTweetContext } from "../../hooks/useTweetContext";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  const { tweets, setFilteredTweetsData, setTagIsClicked } = useTweetContext();
  const { theme } = useTheme();

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      setFilteredTweetsData(tweets);
      setTagIsClicked(false);
    } else
      filterItems(tweets, inputValue, setFilteredTweetsData, setTagIsClicked);
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
