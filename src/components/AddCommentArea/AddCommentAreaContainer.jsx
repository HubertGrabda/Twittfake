import { useRef } from "react";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddCommentAreaView from "./AddCommentAreaView";
import PropTypes from "prop-types";

const CommentAreaContainer = ({ tweetId }) => {
  const commentInputRef = useRef();
  const { userLogged } = useTweetContext();
  const { submitComment, isError } = SubmitService();
  const { theme } = useTheme();

  return (
    <AddCommentAreaView
      tweetId={tweetId}
      userLogged={userLogged}
      commentInputRef={commentInputRef}
      submitComment={submitComment}
      isError={isError}
      theme={theme}
    />
  );
};

CommentAreaContainer.propTypes = {
  tweetId: PropTypes.node.isRequired,
};

export default CommentAreaContainer;
