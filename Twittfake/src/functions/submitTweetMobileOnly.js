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
  const inputsCurrentClassname = input.className;

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
  refName.current.className = inputsCurrentClassname;

  navigate("/");
};

export default submitTweetMobileOnly;
