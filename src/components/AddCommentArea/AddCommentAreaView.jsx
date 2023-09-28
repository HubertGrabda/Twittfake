import { classNames, handleLinesAmount } from "../../shared";
import {
  ADD_COMMENT_INPUT_PLACEHOLDER,
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import "./AddCommentArea.scss";
import PropTypes from "prop-types";

const AddCommentAreaView = ({
  tweetId,
  userLogged,
  commentInputRef,
  submitComment,
  errorOccured,
  theme,
}) => (
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
            errorOccured
              ? ADD_COMMENT_INPUT_PLACEHOLDER_ERROR
              : ADD_COMMENT_INPUT_PLACEHOLDER
          }
          maxLength={75}
          onKeyDown={handleLinesAmount}
        />
        <button
          className='add-comment__submit-button'
          onClick={() => submitComment(tweetId, commentInputRef)}
        >
          {SUBMIT_BUTTON_TEXT}
        </button>
      </div>
    )}
  </>
);

AddCommentAreaView.propTypes = {
  userLogged: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  commentInputRef: PropTypes.object,
  theme: PropTypes.string,
  errorOccured: PropTypes.bool,
  tweetId: PropTypes.node,
  submitComment: PropTypes.func,
};

export default AddCommentAreaView;