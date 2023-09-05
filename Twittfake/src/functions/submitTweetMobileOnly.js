import { classNames } from "./classNames";

const submitTweetMobileOnly = (
  refName,
  tweets,
  setTweets,
  navigate,
  inputPlaceholder,
  setFilteredTweetsData,
  loggedUsername,
  theme
) => {
  let input = refName.current;

  const errorClassName = "textarea__input textarea__input--error";
  const InputErrorMessage = "Nie można dodać pustego tweeta!";
  const defaultClassName = classNames([
    "textarea__input",
    theme === "isDark" && "textarea__input--isDark",
  ]);

  if (!input?.value) {
    refName.current.placeholder = InputErrorMessage;
    refName.current.className = errorClassName;
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
  refName.current.className = defaultClassName;

  navigate("/");
};

export default submitTweetMobileOnly;
