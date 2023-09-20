import "./SearchbarMobile.scss";
import { Link } from "react-router-dom";
import { SEARCH_BUTTON_TEXT } from "../../const/input";
import TweetService from "../../services/TweetService";

const SearchbarMobile = () => {
  const { filterItems } = TweetService();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    filterItems(inputValue);
  };

  return (
    <div className='searchbar-mobile'>
      <input className='searchbar-mobile__input' onChange={handleInput}></input>
      <Link to='/SearchResult'>
        <button className='searchbar-mobile__submit-button'>
          {SEARCH_BUTTON_TEXT}
        </button>
      </Link>
    </div>
  );
};

export default SearchbarMobile;
