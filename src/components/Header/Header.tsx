import "./Header.scss";

type HeaderTypes = {
  pageTitle: string;
};

const Header = ({ pageTitle }: HeaderTypes) => (
  <>
    <header className='header'>{pageTitle}</header>
  </>
);

export default Header;
