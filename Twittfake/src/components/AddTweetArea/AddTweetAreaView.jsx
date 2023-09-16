import {
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  ADD_TWEET_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import { classNames, handleLinesAmount } from "../../shared";
import "./AddTweetArea.scss";
import PropTypes from "prop-types";

const AddTweetAreaView = (props) => (
  <>
    <div className='textarea'>
      <textarea
        className={classNames([
          "textarea__input",
          props.theme === "isDark" && "textarea__input--isDark",
          props.errorOccured && "textarea__input--error",
        ])}
        placeholder={
          props.errorOccured
            ? ADD_COMMENT_INPUT_PLACEHOLDER_ERROR
            : ADD_TWEET_INPUT_PLACEHOLDER(props.userLogged)
        }
        ref={props.inputRef}
        maxLength={85}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea__submit-button'
        onClick={() => props.submitTweet(props.inputRef)}
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
  errorOccured: PropTypes.bool.isRequired,
  submitTweet: PropTypes.func.isRequired,
};

export default AddTweetAreaView;
