import { useEffect, useState } from "react";

const ScrollHandler = () => {
  const [showElement, setShowElement] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > lastScrollPos) {
      setShowElement(false);
    } else {
      setShowElement(true);
    }
    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return showElement;
};

export default ScrollHandler;
