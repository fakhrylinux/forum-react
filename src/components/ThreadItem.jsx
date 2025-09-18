import { BiComment } from "react-icons/bi";
import { postedAt } from "../utils/index.js";
import { Link } from "react-router";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";
import PropTypes from "prop-types";
import { threadItemShape } from "../types/index.js";

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy = [],
  downVotesBy = [],
  totalComments = 0,
  user,
  authUser,
  upVote = null,
  downVote = null,
  neutralVote = null,
}) {
  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownvoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onNeutralVoteClick = (event) => {
    event.stopPropagation();
    neutralVote(id);
  };

  return (
    <div className="content-card">
      <div className="content-card-header">
        <div>
          <Link to={`/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
      <div>
        <h5>posted at: {postedAt(createdAt)}</h5>
      </div>

      <div className="content-card-tags">
        <span className="tag">{category}</span>
      </div>
      <div className="content-card__body">
        <p className="content-card__body">{body}</p>
      </div>

      <div className="content-card-stats">
        <UpVoteButton
          onUpVote={onUpVoteClick}
          onNeutralVote={onNeutralVoteClick}
          upVotesBy={upVotesBy}
          authUser={authUser}
        />
        <h5>{upVotesBy.length}</h5>
        <DownVoteButton
          onDownVote={onDownvoteClick}
          onNeutralVote={onNeutralVoteClick}
          downVotesBy={downVotesBy}
          authUser={authUser}
        />
        <h5>{downVotesBy.length}</h5>
        <button>
          <BiComment />
        </button>
        <div>{totalComments}</div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
};

export default ThreadItem;
