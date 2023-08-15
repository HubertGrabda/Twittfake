import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  const { tweets, setSearchInput, setFilteredItems } =
    useContext(TweetsContext);

  const filterItems = (inputValue) => {
    const filteredResults = tweets.filter((tweet) =>
      tweet.content.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredItems(filteredResults);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    filterItems(inputValue);
  };

  return (
    <div className='searchbar'>
      <input
        className='searchbar__input'
        placeholder={placeholderText}
        onChange={handleSearchInputChange}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar__icon' />
    </div>
  );
};

export default Searchbar;
