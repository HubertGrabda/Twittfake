import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddTweetArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";
import submitTweet from "../../functions/submitTweet";

export const AddTweetArea = () => {
  const { tweets, setTweets, userLogged, inputPlaceholder } =
    useContext(TweetsContext);
  const buttonValue = "Prześlij";
  const InputRef = useRef();

  return (
    <div className='textarea-wrapper'>
      <textarea
        className='textarea-wrapper__input'
        placeholder={inputPlaceholder}
        ref={InputRef}
        maxLength={85}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea-wrapper__submit-button'
        onClick={() =>
          submitTweet(
            InputRef,
            tweets,
            setTweets,
            userLogged,
            "textarea-wrapper__input--error"
          )
        }
      >
        {buttonValue}
      </button>
    </div>
  );
};
