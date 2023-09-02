const popularTrendsFilter = (tweets) => {
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

export default popularTrendsFilter;
