import logo from "../../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../Header/Header.scss";

const Header = () => {
  const pageName = "Główna";

  return (
    <>
      <header>
        <div className='main__header'>
          <img
            className='main__header__profile_picture'
            src={logo}
            alt='Twittfake logo'
          ></img>
          <h1 className='main__header__headline'> {pageName} </h1>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='main__header__icon'
          />
        </div>
      </header>
    </>
  );
};

export default Header;
