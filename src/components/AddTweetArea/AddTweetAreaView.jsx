import {
  ADD_TWEET_INPUT_PLACEHOLDER,
  ADD_TWEET_INPUT_PLACEHOLDER_ERROR,
  INPUT_LENGTH,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import { classNames, handleLinesAmount } from "../../shared";
import "./AddTweetArea.scss";
import PropTypes from "prop-types";

const AddTweetAreaView = ({
  userLogged,
  submitTweet,
  isError,
  theme,
  inputRef,
}) => (
  <>
    <div className='textarea'>
      <textarea
        data-testid='content-input'
        className={classNames([
          "textarea__input",
          theme === "dark" && "textarea__input--dark",
          isError && "textarea__input--error",
        ])}
        placeholder={
          isError
            ? ADD_TWEET_INPUT_PLACEHOLDER_ERROR
            : ADD_TWEET_INPUT_PLACEHOLDER(userLogged)
        }
        ref={inputRef}
        maxLength={INPUT_LENGTH}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea__submit-button'
        onClick={() => submitTweet(inputRef)}
        data-testid='submit-button'
      >
        {SUBMIT_BUTTON_TEXT}
      </button>
    </div>
  </>
);

AddTweetAreaView.propTypes = {
  userLogged: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  submitTweet: PropTypes.func.isRequired,
};

export default AddTweetAreaView;
