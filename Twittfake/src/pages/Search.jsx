import Header from "../assets/Header/Header";
import HomeButton from "../assets/HomeButton/HomeButton";
import Navbar from "../assets/Navbar/Navbar";
import PopularMobile from "../assets/PopularMobile/PopularMobile";
import ProfilesReference from "../assets/ProfilesReference/ProfileRefernece";
import SearchbarMobile from "../assets/SearchbarMobile/SearchbarMobile";

const Search = () => {
  return (
    <>
      <Header name='Wyszukaj' />
      <ProfilesReference />
      <HomeButton />
      <Navbar />
      <SearchbarMobile />
      <PopularMobile />
    </>
  );
};

export default Search;
