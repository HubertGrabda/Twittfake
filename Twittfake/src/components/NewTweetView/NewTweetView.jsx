import "./NewTweetView.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/twittfake.png";
import submitTweetMobileOnly from "../../functions/submitTweetMobileOnly";
import useRedirect from "../../hooks/useRedirect";

const NewTweetView = () => {
  useRedirect();

  const { tweets, setTweets, setFilteredTweetsData } =
    useContext(TweetsContext);
  const loggedUsername = sessionStorage.getItem("username");
  const inputPlaceholder = `O czym myślisz${
    loggedUsername ? `, ${loggedUsername}` : ""
  }?`;
  const textareaInput = useRef();
  const buttonValue = "Prześlij";
  const navigate = useNavigate();

  return (
    <div className='input-field-wrapper'>
      <div className='user-data'>
        <img src={logo} className='user-data__profile-pic'></img>
        <h4 className='user-data__username'>{loggedUsername}</h4>
      </div>
      <div className='textarea'>
        <textarea
          ref={textareaInput}
          className='textarea__input'
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
              loggedUsername
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
