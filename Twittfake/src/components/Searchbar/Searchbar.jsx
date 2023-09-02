import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";
import { classNames } from "../../functions/classNames";
import { useTheme } from "../../hooks/useTheme";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  const { tweets, setFilteredTweetsData, setTileIsClicked } =
    useContext(TweetsContext);

  const { theme } = useTheme();

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setFilteredTweetsData(tweets);
      setTileIsClicked(false);
    } else
      filterItems(tweets, inputValue, setFilteredTweetsData, setTileIsClicked);
  };

  return (
    <div className='searchbar'>
      <input
        className={classNames([
          "searchbar__input",
          theme === "isDark" && "searchbar__input--isDark",
        ])}
        placeholder={placeholderText}
        onChange={handleSearchInputChange}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar__icon' />
    </div>
  );
};

export default Searchbar;
