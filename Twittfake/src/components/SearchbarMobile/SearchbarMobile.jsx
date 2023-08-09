import "./SearchbarMobile.scss";

const SearchbarMobile = () => {
  const placeholderText = "Wyszukaj";
  return (
    <div className='searchbar-Mobile'>
      <input
        className='searchbar-Mobile__input'
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default SearchbarMobile;
