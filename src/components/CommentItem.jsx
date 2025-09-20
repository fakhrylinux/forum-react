import { postedAt } from "../utils/index.js";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";

function CommentItem({ content, createdAt, owner, upVotesBy, downVotesBy }) {
  return (
    <div className="comment-card">
      <div className="avatar">
        <img
          src={owner.avatar}
          alt={owner.name}
          className="comment-author-image"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="comment-text">
        <p>{content}</p>
        <small>{postedAt(createdAt)}</small>
        <div className="comment-stats">
          <div className="comment-stats__item">
            <UpVoteButton
            // onUpVote={onUpVoteClickHandle}
            // onNeutralVote={onNeutralVoteClickHandle}
            // upVotesBy={upVotesBy}
            // authUser={authUser}
            />
            <h5>{upVotesBy.length}</h5>
          </div>
          <div className="comment-stats__item">
            <DownVoteButton
            // onDownVote={onDownVoteClickHandle}
            // onNeutralVote={onNeutralVoteClickHandle}
            // downVotesBy={downVotesBy}
            // authUser={authUser}
            />
            <h5>{downVotesBy.length}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
