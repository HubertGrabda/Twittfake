export const classNames = (array) => {
  return array.filter((value) => value).join(" ");
};

export const handleLinesAmount = (e) => {
  const maxLines = 2;
  const lines = e.target.value.split("\n").length;

  if (lines >= maxLines && e.key === "Enter") {
    e.preventDefault();
  }
};

export const handleRowsAmount = (content) => {
  const { length } = content;

  if (25 >= length >= 50) {
    return 2;
  } else if (50 <= length) {
    return 3;
  }
};

export const popularTrendsFilter = (tweets) => {
  const countObj = {};

  tweets.forEach((tweet) => {
    const { content } = tweet;
    const extractedHashtags = content
      .split(" ")
      .filter((el) => el.includes("#"));

    const seenHashtags = {};

    extractedHashtags.forEach((hashtag) => {
      if (!seenHashtags[hashtag]) {
        countObj[hashtag] = (countObj[hashtag] ?? 0) + 1;
        seenHashtags[hashtag] = true;
      }
    });
  });

  const popularHashtags = Object.keys(countObj).filter(
    (hashtag) => countObj[hashtag] >= 2
  );

  return { countObj, popularHashtags };
};

export const toggleState = (setterName, updaterFunc, id) => {
  setterName((prevState) => ({
    ...prevState,
    [id]: updaterFunc(prevState[id]),
  }));
};

export const clearInput = (input) => (input.value = "");
