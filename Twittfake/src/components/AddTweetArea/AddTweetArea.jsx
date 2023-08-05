import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddTweetArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";
import submitTweet from "../../functions/submitTweet";

export const AddTweetArea = () => {
  const { tweets, setTweets, loggedUsername, inputPlaceholder } =
    useContext(TweetsContext);
  const buttonValue = "Prześlij";
  const InputRef = useRef();

  return (
    <div className='textarea-wrapper'>
      <textarea
        className='textarea-wrapper__input'
        placeholder={inputPlaceholder}
        ref={InputRef}
        maxLength={100}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='textarea-wrapper__submit-button'
        onClick={() => submitTweet(InputRef, tweets, setTweets, loggedUsername)}
      >
        {buttonValue}
      </button>
    </div>
  );
};
