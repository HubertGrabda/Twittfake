export function classNames(array) {
  return array.filter((value) => value).join(" ");
}

export const filterItems = (
  data,
  inputValue,
  setResultState,
  setIsTagClicked
) => {
  const filteredResults = data.filter((item) =>
    item.content.toLowerCase().includes(inputValue.toLowerCase())
  );

  setIsTagClicked(true);
  setResultState(filteredResults);
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
