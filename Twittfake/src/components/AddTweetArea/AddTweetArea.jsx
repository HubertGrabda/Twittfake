import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddTweetArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";
import submitTweet from "../../functions/submitTweet";
import { ThemeContext } from "../../context/ThemeContext";
import { classNames } from "../../functions/classNames";

export const AddTweetArea = () => {
  const {
    tweets,
    setTweets,
    filteredTweetsData,
    setFilteredTweetsData,
    userLogged,
  } = useContext(TweetsContext);
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef();
  
  const buttonValue = "Prześlij";
  const inputPlaceholder = `O czym myślisz${
    userLogged ? `, ${userLogged}` : ""
  }?`;

  return (
    <>
      {userLogged && (
        <div className='textarea-wrapper'>
          <textarea
            className={classNames([
              theme === "light"
                ? "textarea-wrapper__input"
                : "textarea-wrapper__input --dark",
            ])}
            placeholder={inputPlaceholder}
            ref={inputRef}
            maxLength={85}
            onKeyDown={handleLinesAmount}
          ></textarea>
          <button
            className='textarea-wrapper__submit-button'
            onClick={() =>
              submitTweet(
                inputRef,
                tweets,
                setTweets,
                userLogged,
                "textarea-wrapper__input--error",
                setFilteredTweetsData,
                filteredTweetsData
              )
            }
          >
            {buttonValue}
          </button>
        </div>
      )}
    </>
  );
};
