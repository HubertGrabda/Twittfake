import { useRef } from "react";
import "./AddTweetArea.scss";
import { classNames, handleLinesAmount } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import {
  ADD_TWEET_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";

export const AddTweetArea = () => {
  const { userLogged } = useTweetContext();
  const { submitTweet, errorOccured } = SubmitService();
  const { theme } = useTheme();
  const inputRef = useRef();

  const InputErrorMessage = "Nie można dodać pustego tweeta!";

  return (
    <>
      {userLogged && (
        <div className='textarea'>
          <textarea
            className={classNames([
              "textarea__input",
              theme === "isDark" && "textarea__input--isDark",
              errorOccured && "textarea__input--error",
            ])}
            placeholder={
              errorOccured
                ? InputErrorMessage
                : ADD_TWEET_INPUT_PLACEHOLDER(userLogged)
            }
            ref={inputRef}
            maxLength={85}
            onKeyDown={handleLinesAmount}
          ></textarea>
          <button
            className='textarea__submit-button'
            onClick={() => submitTweet(inputRef)}
          >
            {SUBMIT_BUTTON_TEXT}
          </button>
        </div>
      )}
    </>
  );
};
