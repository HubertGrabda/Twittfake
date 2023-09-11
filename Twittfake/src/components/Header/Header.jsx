import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ name }) => (
  <>
    <header className='page-title'>{name}</header>
  </>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
