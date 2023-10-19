import {
  ADD_TWEET_INPUT_PLACEHOLDER,
  ADD_TWEET_INPUT_PLACEHOLDER_ERROR,
  INPUT_LENGTH,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import { classNames, handleLinesAmount } from "../../shared";
import "./AddTweetArea.scss";

type AddTweetAreaViewPropTypes = {
  userLogged: string;
  theme: string;
  isError: boolean;
  submitTweet: (refName: React.MutableRefObject<string>) => void;
  inputRef: React.MutableRefObject<string>;
};

const AddTweetAreaView = ({
  userLogged,
  submitTweet,
  isError,
  theme,
  inputRef,
}: AddTweetAreaViewPropTypes) => (
  <>
    <div className='textarea'>
      <textarea
        className={classNames([
          "textarea__input",
          theme === "isDark" && "textarea__input--isDark",
          isError && "textarea__input--error",
        ])}
        placeholder={
          isError
            ? ADD_TWEET_INPUT_PLACEHOLDER_ERROR
            : ADD_TWEET_INPUT_PLACEHOLDER(userLogged)
        }
        ref={() => inputRef}
        maxLength={INPUT_LENGTH}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea__submit-button'
        onClick={() => submitTweet(inputRef)}
      >
        {SUBMIT_BUTTON_TEXT}
      </button>
    </div>
  </>
);

export default AddTweetAreaView;
