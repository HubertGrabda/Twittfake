import "./NewTweetView.scss";
import { TweetsContext } from "../../context/TweetContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import submitTweetMobileOnly from "../../shared/submitTweetMobileOnly";
import useRedirect from "../../hooks/useRedirect";
import logo from "../../images/TwittfakeLogoAlt.png";
import getUsername from "../../shared/getUsername";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../shared/classNames";

const NewTweetView = () => {
  useRedirect();

  const { tweets, setTweets, setFilteredTweetsData } = useTweetContext();
  const loggedUsername = getUsername();
  const inputPlaceholder = `O czym myślisz${
    loggedUsername ? `, ${loggedUsername}` : ""
  }?`;
  const textareaInput = useRef();
  const buttonValue = "Prześlij";
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className='input-field-wrapper'>
      <div className='user-data'>
        <img src={logo} className='user-data__profile-pic'></img>
        <h4 className='user-data__username'>{loggedUsername}</h4>
      </div>
      <div className='textarea'>
        <textarea
          ref={textareaInput}
          className={classNames([
            "textarea__input",
            theme === "isDark" && "textarea__input--isDark",
          ])}
          placeholder={inputPlaceholder}
        ></textarea>{" "}
        <button
          className='textarea__submit-button'
          onClick={() =>
            submitTweetMobileOnly(
              textareaInput,
              tweets,
              setTweets,
              navigate,
              inputPlaceholder,
              setFilteredTweetsData,
              loggedUsername,
              theme
            )
          }
        >
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default NewTweetView;
