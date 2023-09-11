import "./SearchbarMobile.scss";
import { Link } from "react-router-dom";
import { filterItems } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import { SEARCH_BUTTON_TEXT } from "../../const/input";

const SearchbarMobile = () => {
  const { tweets, setFilteredTweetsData, setTagIsClicked } = useTweetContext();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    filterItems(tweets, inputValue, setFilteredTweetsData, setTagIsClicked);
  };

  return (
    <div className='searchbar-Mobile'>
      <input className='searchbar-Mobile__input' onChange={handleInput}></input>
      <Link to='/SearchResult'>
        <button className='searchbar-Mobile__submit-button'>
          {SEARCH_BUTTON_TEXT}
        </button>
      </Link>
    </div>
  );
};

export default SearchbarMobile;
