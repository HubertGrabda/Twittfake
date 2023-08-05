import "./SearchbarMobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchbarMobile = () => {
  return (
    <div className='searchbar-wrapperMobile'>
      <input
        className='searchbar-wrapperMobile__input'
        placeholder='Wyszukaj'
      ></input>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='searchbar-wrapperMobile__icon'
      />
    </div>
  );
};

export default SearchbarMobile;
