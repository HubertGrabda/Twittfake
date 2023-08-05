import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div className='searchbar-wrapper'>
      <input
        className='searchbar-wrapper__input'
        placeholder='Wyszukaj'
      ></input>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='searchbar-wrapper__icon'
      />
    </div>
  );
};

export default Searchbar;
