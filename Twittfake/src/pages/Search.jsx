import Header from "../assets/Header/Header";
import HomeButton from "../assets/HomeButton/HomeButton";
import Navbar from "../assets/Navbar/Navbar";
import ProfilesReference from "../assets/ProfilesReference/ProfileRefernece";
import SearchbarMobile from "../assets/SearchbarMobile/SearchbarMobile";
import PopularMobile from "../assets/PopularMobile/PopularMobile";
import useResizeAndRedirect from "../hooks/handleResize";

const Search = () => {
  useResizeAndRedirect();

  return (
    <>
      <Header name='Wyszukaj' />
      <ProfilesReference />
      <HomeButton />
      <SearchbarMobile />
      <PopularMobile />
      <Navbar />
    </>
  );
};

export default Search;
