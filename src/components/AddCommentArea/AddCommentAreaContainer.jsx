/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddCommentAreaView from "./AddCommentAreaView";
import PropTypes from "prop-types";

const CommentAreaContainer = ({ tweetId }) => {
  const { userLogged } = useTweetContext();

  if (!userLogged) return;

  const commentInputRef = useRef();
  const { theme } = useTheme();
  const { submitComment, isError } = SubmitService();

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
