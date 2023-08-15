import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import filterItems from "../../functions/filterItems";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  const { tweets, setFilteredItems } = useContext(TweetsContext);

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    filterItems(tweets, inputValue, setFilteredItems);
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
