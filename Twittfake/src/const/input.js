const AddTweetInputPlaceholder = (userLogged) =>
  `O czym myślisz${userLogged ? `, ${userLogged}` : ""}?`;

const submitButtonText = "Prześlij";
const AddCommentInputPlaceholder = "Odpowiedz na tweet";

export {
  AddTweetInputPlaceholder,
  submitButtonText,
  AddCommentInputPlaceholder,
};
