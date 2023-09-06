import { useContext, useRef } from "react";
import "./AddTweetArea.scss";
import handleLinesAmount from "../../shared/handleLinesAmount";
import submitTweet from "../../shared/submitTweet";
import { ThemeContext } from "../../context/ThemeContext";
import { classNames } from "../../shared/classNames";
import { useTweetContext } from "../../hooks/useTweetContext";

export const AddTweetArea = () => {
  const {
    tweets,
    setTweets,
    filteredTweetsData,
    setFilteredTweetsData,
    userLogged,
  } = useTweetContext();
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
              "textarea-wrapper__input",
              theme === "isDark" && "textarea-wrapper__input--isDark",
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
                setFilteredTweetsData,
                filteredTweetsData,
                theme
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
