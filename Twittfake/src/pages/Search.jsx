import Header from "../assets/Header/Header";
import HomeButton from "../assets/HomeButton/HomeButton";
import Navbar from "../assets/Navbar/Navbar";
import ProfilesReference from "../assets/ProfilesReference/ProfileRefernece";
import SearchbarMobile from "../assets/SearchbarMobile/SearchbarMobile";
import PopularMobile from "../assets/PopularMobile/PopularMobile";

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
