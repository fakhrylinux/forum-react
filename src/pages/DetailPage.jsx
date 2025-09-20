import "./detail-page.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  asyncAddComment,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from "../states/threadDetail/action.js";
import CommentItem from "../components/CommentItem.jsx";
import ThreadDetail from "../components/ThreadDetail.jsx";
import CommentInput from "../components/CommentInput.jsx";

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThreadDetail(id));
  };

  const downVote = (id) => {
    dispatch(asyncDownVoteThreadDetail(id));
  };

  const onNeutralVote = (id) => {
    dispatch(asyncNeutralizeVoteThreadDetail(id));
  };

  const onAddComment = (content) => {
    dispatch(asyncAddComment(content));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="content-card">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser}
        upVote={onUpVote}
        downVote={downVote}
        neutralVote={onNeutralVote}
      />

      <div className="comments-section">
        <CommentInput
          threadId={id}
          authUser={authUser}
          addComment={onAddComment}
        />
        <h4>Comments ({threadDetail.comments.length})</h4>
        {threadDetail.comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
