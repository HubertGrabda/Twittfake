const submitTweet = (
  refName,
  tweets,
  setTweets,
  loggedUsername,
  errorClass,
  setFilteredItems,
  filteredItems
) => {
  const InputErrorMessage = "Nie można dodać pustego tweeta!";
  const inputPlaceholder = `O czym myślisz, ${loggedUsername}?`;

  let input = refName.current;
  if (input.value.trim() === "") {
    refName.current.placeholder = InputErrorMessage;
    refName.current.className = errorClass;
    return;
  } else input.value;

  const newTweet = {
    id: tweets.length + 1,
    username: loggedUsername,
    content: input.value,
  };

  setTweets([newTweet, ...tweets]);
  setFilteredItems([newTweet, ...filteredItems]);

  refName.current.placeholder = inputPlaceholder;
  refName.current.value = "";
  refName.current.className = "textarea-wrapper__input";
};

export default submitTweet;
