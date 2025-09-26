import { BiDownvote, BiSolidDownvote } from 'react-icons/bi';
import PropTypes from 'prop-types';
import IconButton from './styled/IconButton.js';

function DownVoteButton({
  onDownVote,
  onNeutralVote,
  downVotesBy = [],
  authUser,
}) {
  return downVotesBy.includes(authUser) ? (
    <IconButton type="button" onClick={onNeutralVote}>
      <BiSolidDownvote style={{ fontSize: '1.1rem' }} />
    </IconButton>
  ) : (
    <IconButton type="button" onClick={onDownVote}>
      <BiDownvote style={{ fontSize: '1.1rem' }} />
    </IconButton>
  );
}

DownVoteButton.propTypes = {
  onDownVote: PropTypes.func,
  onNeutralVote: PropTypes.func,
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  authUser: PropTypes.string,
};

export default DownVoteButton;
