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
    input.placeholder = InputErrorMessage;
    input.className = errorClassName;
    return;
  }

  const newTweet = {
    id: tweets.length + 1,
    username: loggedUsername,
    content: input.value,
  };

  setTweets([newTweet, ...tweets]);
  setFilteredTweetsData([newTweet, ...filteredTweetsData]);

  input.placeholder = inputPlaceholder;
  input.value = "";
  input.className = defaultClassName;
};

export default submitTweet;
