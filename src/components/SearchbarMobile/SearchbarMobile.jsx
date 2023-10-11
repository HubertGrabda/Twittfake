import "./SearchbarMobile.scss";
import { Link } from "react-router-dom";
import { SEARCH_BAR_PLACEHOLDER, SEARCH_BUTTON_TEXT } from "../../const/input";
import TweetService from "../../services/TweetService";

const SearchBarMobile = () => {
  const { handleSearch } = TweetService();

  return (
    <div className='search-bar-mobile'>
      <input
        className='search-bar-mobile__input'
        onChange={handleSearch}
        placeholder={SEARCH_BAR_PLACEHOLDER}
      ></input>
      <Link to='/SearchResult'>
        <button className='search-bar-mobile__submit-button'>
          {SEARCH_BUTTON_TEXT}
        </button>
      </Link>
    </div>
  );
};

export default SearchBarMobile;
