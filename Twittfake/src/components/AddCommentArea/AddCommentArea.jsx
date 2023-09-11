import { useRef } from "react";
import PropTypes from "prop-types";
import "./AddCommentArea.scss";
import { classNames, handleLinesAmount } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { ADD_COMMENT_INPUT_PLACEHOLDER } from "../../const/input";
import { useTheme } from "../../hooks/useTheme";

const CommentArea = ({ id }) => {
  const commentInputRef = useRef();
  const { userLogged } = useTweetContext();
  const { submitComment, errorOccured } = SubmitService();
  const { theme } = useTheme();

  const inputErrorMessage = "Nie można dodać pustej odpowiedzi!";
  const buttonValue = "Prześlij";

  return (
    <>
      {userLogged && (
        <div className='add-comment'>
          <textarea
            ref={commentInputRef}
            className={classNames([
              "add-comment__input",
              theme === "isDark" && "add-comment__input--isDark",
              errorOccured && "add-comment__input--error",
            ])}
            placeholder={
              errorOccured ? inputErrorMessage : ADD_COMMENT_INPUT_PLACEHOLDER
            }
            maxLength={80}
            onKeyDown={handleLinesAmount}
          />
          <button
            className='add-comment__submit-button'
            onClick={() => submitComment(id, commentInputRef)}
          >
            {buttonValue}
          </button>
        </div>
      )}
    </>
  );
};

CommentArea.propTypes = {
  id: PropTypes.node.isRequired,
};

export default CommentArea;
