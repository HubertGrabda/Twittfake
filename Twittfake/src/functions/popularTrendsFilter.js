const popularTrendsFilter = (tweets) => {
  const hashtagsArray = [];

  tweets.map((tweet) => {
    hashtagsArray.push(tweet?.hashtag ?? null);
  });

  const countMap = {};
  const duplicates = [];

  hashtagsArray.forEach((hashtag) => {
    if (hashtag !== null) {
      countMap[hashtag] = (countMap[hashtag] ?? 0) + 1;
      if (countMap[hashtag] === 2) {
        duplicates.push(hashtag);
      }
    }
  });

  return { countMap, duplicates };
};

export default popularTrendsFilter;
