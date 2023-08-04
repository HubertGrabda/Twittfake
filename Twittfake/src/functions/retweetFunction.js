const retweet = (content) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    content
  )}`;
  window.open(twitterUrl, "_blank");
};

export default retweet;
