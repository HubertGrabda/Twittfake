import "./Searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const placeholderText = "Wyszukaj";
  return (
    <div className='searchbar'>
      <input className='searchbar__input' placeholder={placeholderText}></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar__icon' />
    </div>
  );
};

export default Searchbar;
