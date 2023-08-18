import "./NewTweetView.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/twittfake.png";
import submitTweetMobileOnly from "../../functions/submitTweetMobileOnly";
import useResizeAndRedirect from "../../hooks/handleResize";

const NewTweetView = () => {
  const { tweets, setTweets } = useContext(TweetsContext);
  const loggedUsername = sessionStorage.getItem("username");
  const inputPlaceholder = `O czym myślisz${
    loggedUsername ? `, ${loggedUsername}` : ""
  }?`;
  const textareaInput = useRef();
  const buttonValue = "Prześlij";
  const navigate = useNavigate();
  useResizeAndRedirect();

  return (
    <div className='input-field-wrapper'>
      <div className='user-data'>
        <img
          src={logo}
          className='user-data__profile-pic'
        ></img>
        <h4 className='user-data__username'>
          {loggedUsername}
        </h4>
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
              inputPlaceholder
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
