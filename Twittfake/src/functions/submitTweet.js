import { classNames } from "./classNames";

const submitTweet = (
  refName,
  tweets,
  setTweets,
  loggedUsername,
  setFilteredTweetsData,
  filteredTweetsData,
  theme
) => {
  let input = refName.current;

  const InputErrorMessage = "Nie można dodać pustego tweeta!";
  const inputPlaceholder = `O czym myślisz, ${loggedUsername}?`;
  const errorClassName = "textarea-wrapper__input--error";
  const defaultClassName = classNames([
    "textarea-wrapper__input",
    theme === "isDark" && "textarea-wrapper__input--isDark",
  ]);

  if (!input.value) {
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
  setFilteredTweetsData([newTweet, ...filteredTweetsData]);

  refName.current.placeholder = inputPlaceholder;
  refName.current.value = "";
  refName.current.className = defaultClassName;
};

export default submitTweet;
