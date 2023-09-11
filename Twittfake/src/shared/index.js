import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ScrollHandler = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
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
          setScrollingUp(false);
        } else {
          setScrollingUp(true);
        }
        setLastScrollPos(currentScrollPos);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMainPage, lastScrollPos]);

  return scrollingUp;
};

export function classNames(array) {
  return array.filter((value) => value).join(" ");
}

export const filterItems = (
  data,
  inputValue,
  setResultState,
  setTagIsClicked
) => {
  const filteredResults = data.filter((item) =>
    item.content.toLowerCase().includes(inputValue.toLowerCase())
  );

  setTagIsClicked(true);
  setResultState(filteredResults);
};

export const getUsername = () => {
  const userLogged = sessionStorage.getItem("username");
  if (userLogged) {
    return userLogged;
  } else {
    return false;
  }
};

export const handleLinesAmount = (e) => {
  const maxLines = 2;
  const lines = e.target.value.split("\n").length;
  if (lines >= maxLines && e.key === "Enter") {
    e.preventDefault();
  }
};

export const popularTrendsFilter = (tweets) => {
  const hashtagsArray = [];

  tweets.map((tweet) => {
    hashtagsArray.push(tweet?.hashtag ?? null);
  });

  const countObj = {};
  const duplicates = [];

  hashtagsArray.forEach((hashtag) => {
    if (hashtag !== null) {
      countObj[hashtag] = (countObj[hashtag] ?? 0) + 1;
      if (countObj[hashtag] === 2) {
        duplicates.push(hashtag);
      }
    }
  });

  return { countMap: countObj, duplicates };
};

export const toggleState = (setterName, updaterFunc, id) => {
  setterName((prevState) => ({
    ...prevState,
    [id]: updaterFunc(prevState[id]),
  }));
};

export const clearInput = (input) => (input.value = "");
