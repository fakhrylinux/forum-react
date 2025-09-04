import { BiDownvote, BiSolidDownvote, BiUpvote } from "react-icons/bi";
import { MdOutlineHowToVote } from "react-icons/md";

function ThreadItem() {
  return (
    <div className="content-card">
      <div className="content-card-header">
        <div>
          <a href="/detail">
            <h3>Blockchain developer</h3>
          </a>
        </div>
      </div>

      <div className="content-card-tags">
        <span className="tag">finance</span>
        <span className="tag">bitcoin</span>
        <span className="tag">crypto</span>
      </div>

      <div className="content-card-stats">
        <button>
          <BiUpvote />
        </button>
        <button>
          <BiSolidDownvote />
        </button>
        <div>651,324 Views</div>
        <div>36,6545 Likes</div>
        <div>56 comments</div>
      </div>
    </div>
  );
}
export default ThreadItem;
