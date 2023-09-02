import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import Navbar from "../components/Navbar/Navbar";
import ProfilesReference from "../components/ProfilesReference/ProfileRefernece";
import SearchbarMobile from "../components/SearchbarMobile/SearchbarMobile";
import PopularMobile from "../components/PopularMobile/PopularMobile";
import useRedirect from "../hooks/useRedirect";


const Search = () => {
  useRedirect();

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
