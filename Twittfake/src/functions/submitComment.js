const submitComment = (
  id,
  refName,
  tweets,
  setTweets,
  inputErrorMessage,
  defaultPlaceholderText
) => {
  let input = refName.current;
  if (input.value.trim() === "") {
    input.placeholder = inputErrorMessage;
    input.className = "add-comment__input--error";
    return;
  }

  const highestCommentId = tweets.reduce((highestID, tweet) => {
    if (tweet.comments && tweet.comments.length > 0) {
      const maxCommentId = tweet.comments.reduce(
        (maxID, comment) => Math.max(maxID, comment.id),
        0
      );
      return Math.max(highestID, maxCommentId);
    }
    return highestID;
  }, 0);

  const newComment = {
    id: highestCommentId + 1,
    username: "Twittfake_Dev",
    content: input.value,
  };

  setTweets((prevTweets) =>
    prevTweets.map((tweet) =>
      tweet.id === id
        ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
        : tweet
    )
  );

  input.placeholder = defaultPlaceholderText;
  input.value = "";
  input.className = "add-comment__input";
};
export default submitComment;
