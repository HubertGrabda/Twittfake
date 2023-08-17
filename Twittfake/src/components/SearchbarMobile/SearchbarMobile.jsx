import { useContext } from "react";
import "./SearchbarMobile.scss";
import { Link } from "react-router-dom";
import filterItems from "../../functions/filterItems";
import { TweetsContext } from "../../context/Tweet'sState";

const SearchbarMobile = () => {
  const { tweets, setFilteredItems } = useContext(TweetsContext);
  const buttonText = "Wyszukaj";

  const handleInput = (e) => {
    const inputValue = e.target.value;
    filterItems(tweets, inputValue, setFilteredItems);
  };

  return (
    <div className='searchbar-Mobile'>
      <input className='searchbar-Mobile__input' onChange={handleInput}></input>
      <Link to='/'>
        <button className='searchbar-Mobile__submit-button'>
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default SearchbarMobile;
