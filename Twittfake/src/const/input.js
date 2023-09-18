const ADD_TWEET_INPUT_PLACEHOLDER = (userLogged) =>
  `O czym myślisz${userLogged ? `, ${userLogged}` : ""}?`;
const ADD_TWEET_PLACEHOLDER_ERROR = "Nie można dodać pustego tweeta!";
const SUBMIT_BUTTON_TEXT = "Prześlij";
const ADD_COMMENT_INPUT_PLACEHOLDER = "Odpowiedz na tweet";
const ADD_COMMENT_INPUT_PLACEHOLDER_ERROR =
  "Nie można dodać pustej odpowiedzi!";
const SEARCH_BUTTON_TEXT = "Szukaj";
const SAVE_BUTTON_TEXT = "Zapisz";

export {
  ADD_TWEET_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_TEXT,
  ADD_COMMENT_INPUT_PLACEHOLDER,
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  SEARCH_BUTTON_TEXT,
  ADD_TWEET_PLACEHOLDER_ERROR,
  SAVE_BUTTON_TEXT,
};
