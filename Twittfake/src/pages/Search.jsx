import Header from "../assets/Header/Header";
import HomeButton from "../assets/HomeButton/HomeButton";
import Navbar from "../assets/Navbar/Navbar";
import ProfilesReference from "../assets/ProfilesReference/ProfileRefernece";
import SearchbarMobile from "../assets/SearchbarMobile/SearchbarMobile";
import PopularMobile from "../assets/PopularMobile/PopularMobile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        navigate("/");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

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
