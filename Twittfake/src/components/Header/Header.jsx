import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ name }) => {
  return (
    <>
      <header className='page-title' onClick={() => window.location.reload()}>
        {name}
      </header>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
