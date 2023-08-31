const submitTweetMobileOnly = (
  refName,
  tweets,
  setTweets,
  navigate,
  inputPlaceholder,
  setFilteredTweetsData,
  loggedUsername
) => {
  const InputErrorMessage = "Nie można dodać pustego tweeta!";

  let input = refName.current;
  if (input.value.trim() === "") {
    refName.current.placeholder = InputErrorMessage;
    refName.current.className = "input-field-wrapper__textarea__input--error";
    return;
  } else input.value;

  const newTweet = {
    id: tweets.length + 1,
    username: loggedUsername,
    content: input.value,
  };

  setTweets([newTweet, ...tweets]);
  setFilteredTweetsData([newTweet, ...tweets]);

  refName.current.placeholder = inputPlaceholder;
  refName.current.value = "";
  refName.current.className = "textarea-wrapper__input";

  navigate("/");
};

export default submitTweetMobileOnly;
