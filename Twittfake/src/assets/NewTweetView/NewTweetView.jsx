import "./NewTweetView.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/twittfake.png";
import submitTweetMobileOnly from "../../functions/submitTweetMobileOnly";
import useResizeAndRedirect from "../../hooks/handleResize";

const NewTweetView = () => {
  const { tweets, setTweets, loggedUsername, inputPlaceholder } =
    useContext(TweetsContext);
  const textareaInput = useRef();
  const buttonValue = "Prześlij";
  const navigate = useNavigate();
  useResizeAndRedirect();

  return (
    <div className='input-field-wrapper'>
      <div className='input-field-wrapper__user-data'>
        <img
          src={logo}
          className='input-field-wrapper__user-data__profile-pic'
        ></img>
        <h4 className='input-field-wrapper__user-data__username'>
          {loggedUsername}
        </h4>
      </div>
      <div className='input-field-wrapper__textarea'>
        <textarea
          ref={textareaInput}
          className='input-field-wrapper__textarea__input'
          placeholder={inputPlaceholder}
        ></textarea>{" "}
        <button
          className='input-field-wrapper__textarea__submit-button'
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
