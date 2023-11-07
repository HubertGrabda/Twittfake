import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ pageTitle }) => (
  <>
    <header className='header'>{pageTitle}</header>
  </>
);

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
