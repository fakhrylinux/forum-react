import ThreadItem from "./ThreadItem.jsx";
import PropTypes from "prop-types";
import { threadItemShape } from "../types/index.js";

function ThreadList({ threads, upVote, downVote, neutralVote }) {
  return (
    <>
      <div className="content-grid">
        {threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
          />
        ))}
      </div>
    </>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadList;
