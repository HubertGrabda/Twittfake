const ADD_TWEET_INPUT_PLACEHOLDER = (userLogged) =>
  `O czym myślisz${userLogged ? `, ${userLogged}` : ""}?`;
const ADD_TWEET_INPUT_PLACEHOLDER_ERROR = "Nie można dodać pustego tweeta!";
const ADD_COMMENT_INPUT_PLACEHOLDER = "Odpowiedz na tweet";
const ADD_COMMENT_INPUT_PLACEHOLDER_ERROR =
  "Nie można dodać pustej odpowiedzi!";
const LOG_IN_TEXT = "Zaloguj się";
const SEARCHBAR_PLACEHOLDER = "Wyszukaj";
const SUBMIT_BUTTON_TEXT = "Prześlij";
const SEARCH_BUTTON_TEXT = "Szukaj";
const SAVE_BUTTON_TEXT = "Zapisz";

export {
  ADD_TWEET_INPUT_PLACEHOLDER,
  ADD_TWEET_INPUT_PLACEHOLDER_ERROR,
  ADD_COMMENT_INPUT_PLACEHOLDER,
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  LOG_IN_TEXT,
  SEARCHBAR_PLACEHOLDER,
  SUBMIT_BUTTON_TEXT,
  SEARCH_BUTTON_TEXT,
  SAVE_BUTTON_TEXT,
};
