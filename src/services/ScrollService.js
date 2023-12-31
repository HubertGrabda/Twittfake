import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { homePageRoute } from "../const/routing";

const ScrollService = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const path = useLocation();
  const isMainPage = path.pathname === homePageRoute ? true : false;

  useEffect(() => {
    let timeout;
    const timeRange = 150;

    const handleScroll = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > lastScrollPos) {
          setIsScrollingUp(false);
        } else {
          setIsScrollingUp(true);
        }
        setLastScrollPos(currentScrollPos);
      }, timeRange);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMainPage, lastScrollPos]);

  return isScrollingUp;
};

export default ScrollService;
