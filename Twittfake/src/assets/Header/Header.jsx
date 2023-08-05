import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ name }) => {
  return (
    <>
      <header>
        <div className='page-title'>
          <h1 className='page-title__text'> {name} </h1>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
