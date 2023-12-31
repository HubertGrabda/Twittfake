import "./AddTweetView.scss";
import logo from "../../images/twittfake_logo.png";
import { classNames, handleLinesAmount } from "../../shared";
import {
  ADD_TWEET_INPUT_PLACEHOLDER,
  ADD_TWEET_INPUT_PLACEHOLDER_ERROR,
  INPUT_LENGTH,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import PropTypes from "prop-types";

const AddTweetPageView = ({
  userLogged,
  theme,
  textareaInput,
  submitTweet,
  isError,
}) => (
  <div className='textarea-wrapper'>
    <div className='user-data'>
      <img src={logo} className='user-data__profile-pic'></img>
      <h4 className='user-data__username'>{userLogged}</h4>
    </div>
    <div className='textarea'>
      <textarea
        ref={textareaInput}
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
        maxLength={INPUT_LENGTH}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea__submit-button'
        onClick={() => submitTweet(textareaInput)}
      >
        {SUBMIT_BUTTON_TEXT}
      </button>
    </div>
  </div>
);

AddTweetPageView.propTypes = {
  userLogged: PropTypes.string.isRequired,
  textareaInput: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  id: PropTypes.node,
  submitTweet: PropTypes.func.isRequired,
};

export default AddTweetPageView;
