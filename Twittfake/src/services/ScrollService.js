import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollService = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const path = useLocation();
  const isMainPage = path.pathname === "/" ? true : false;

  useEffect(() => {
    let timeout;

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
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMainPage, lastScrollPos]);

  return isScrollingUp;
};

export default ScrollService;
