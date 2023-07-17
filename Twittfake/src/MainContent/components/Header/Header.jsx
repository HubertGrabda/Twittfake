import "../Header/Header.scss";

const Header = () => {
  const pageName = "Główna";

  return (
    <>
      <header>
        <div className='page-title'>
          <h1 className='page-title__text'> {pageName} </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
