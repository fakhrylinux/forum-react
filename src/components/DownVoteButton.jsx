import { BiDownvote, BiSolidDownvote } from "react-icons/bi";
import PropTypes from "prop-types";

function DownVoteButton({
  onDownVote,
  onNeutralVote,
  downVotesBy = [],
  authUser,
}) {
  return downVotesBy.includes(authUser) ? (
    <button type="button" onClick={onNeutralVote}>
      <BiSolidDownvote />
    </button>
  ) : (
    <button type="button" onClick={onDownVote}>
      <BiDownvote />
    </button>
  );
}

DownVoteButton.propTypes = {
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
  downVotesBy: PropTypes.array,
  authUser: PropTypes.string.isRequired,
};

export default DownVoteButton;
