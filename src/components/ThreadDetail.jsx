import { postedAt } from "../utils/index.js";
import PropTypes from "prop-types";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  upVote,
  downVote,
  neutralVote,
}) {
  const onUpVoteClickHandle = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteClickHandle = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onNeutralVoteClickHandle = (event) => {
    event.stopPropagation();
    neutralVote(id);
  };

  return (
    <>
      <div className="post-header">
        <div className="post-author">
          <img src={owner.avatar} alt="Author" className="post-author-image" />
          <div>
            <h3>{title}</h3>
            <small>{postedAt(createdAt)}</small>
          </div>
        </div>
      </div>
      <div className="post-tags">
        <span className="tag">{category}</span>
      </div>
      <p>{body}</p>

      <div className="post-stats">
        <UpVoteButton
          onUpVote={onUpVoteClickHandle}
          onNeutralVote={onNeutralVoteClickHandle}
          upVotesBy={upVotesBy}
          authUser={authUser}
        />
        <h5>{upVotesBy.length}</h5>
        <DownVoteButton
          onDownVote={onDownVoteClickHandle}
          onNeutralVote={onNeutralVoteClickHandle}
          downVotesBy={downVotesBy}
          authUser={authUser}
        />
        <h5>{downVotesBy.length}</h5>
      </div>
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(commentShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
