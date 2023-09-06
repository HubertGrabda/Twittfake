import { useEffect, useState } from "react";

const ScrollHandler = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > lastScrollPos) {
      setScrollingUp(false);
    } else {
      setScrollingUp(true);
    }
    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return scrollingUp;
};

export default ScrollHandler;
