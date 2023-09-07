import "./NewTweetView.scss";
import { useRef } from "react";
import useRedirect from "../../hooks/useRedirect";
import logo from "../../images/TwittfakeLogoAlt.png";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { AddTweetInputPlaceholder, submitButtonText } from "../../const/input";

const NewTweetView = () => {
  useRedirect();

  const { userLogged } = useTweetContext();
  const { theme } = useTheme();
  const textareaInput = useRef();
  const { submitTweet } = SubmitService();

  return (
    <div className='input-field-wrapper'>
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
          ])}
          placeholder={AddTweetInputPlaceholder(userLogged)}
        ></textarea>{" "}
        <button
          className='textarea__submit-button'
          onClick={() => submitTweet(textareaInput)}
        >
          {submitButtonText}
        </button>
      </div>
    </div>
  );
};

export default NewTweetView;
