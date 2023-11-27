/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddCommentAreaView from "./AddCommentAreaView";
import PropTypes from "prop-types";
import { useUserDataContext } from "../../hooks/useUserDataContext";

const CommentAreaContainer = ({ tweetId }) => {
  const { userLogged } = useUserDataContext();

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
