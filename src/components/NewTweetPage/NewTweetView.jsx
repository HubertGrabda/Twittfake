import "./NewTweetView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { classNames, handleLinesAmount } from "../../shared";
import {
  ADD_TWEET_INPUT_PLACEHOLDER,
  ADD_TWEET_INPUT_PLACEHOLDER_ERROR,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import PropTypes from "prop-types";

const NewTweetPageView = ({
  userLogged,
  theme,
  textareaInput,
  submitTweet,
  errorOccured,
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
          theme === "isDark" && "textarea__input--isDark",
          errorOccured && "textarea__input--error",
        ])}
        placeholder={
          errorOccured
            ? ADD_TWEET_INPUT_PLACEHOLDER_ERROR
            : ADD_TWEET_INPUT_PLACEHOLDER(userLogged)
        }
        maxLength={80}
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

NewTweetPageView.propTypes = {
  userLogged: PropTypes.string.isRequired,
  textareaInput: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  errorOccured: PropTypes.bool,
  id: PropTypes.node,
  submitTweet: PropTypes.func.isRequired,
};

export default NewTweetPageView;
