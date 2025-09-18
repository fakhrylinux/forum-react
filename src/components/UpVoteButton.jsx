import { BiSolidUpvote, BiUpvote } from "react-icons/bi";
import PropTypes from "prop-types";

function UpVoteButton({ onUpVote, onNeutralVote, upVotesBy = [], authUser }) {
  return upVotesBy.includes(authUser) ? (
    <button type="button" onClick={onNeutralVote}>
      <BiSolidUpvote />
    </button>
  ) : (
    <button type="button" onClick={onUpVote}>
      <BiUpvote />
    </button>
  );
}

UpVoteButton.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default UpVoteButton;
