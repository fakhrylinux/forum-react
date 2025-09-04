import "./thread-detail.css";

function ThreadDetail() {
  return (
    <div className="post-content">
      <div className="post-header">
        <div className="post-author">
          <img
            src="user-profile.png"
            alt="Author"
            className="post-author-image"
          />
          <div>
            <h3>Pavel Gway</h3>
            <small>3 weeks ago</small>
          </div>
        </div>
        <img src="heart-icon.png" alt="Like" className="post-like" />
      </div>

      <h2>Blockchain developer best practices on innovationchain</h2>

      <img src="bitcoin-chart.png" alt="Bitcoin Chart" className="post-image" />

      <div className="post-tags">
        <span className="tag">finance</span>
        <span className="tag">bitcoin</span>
        <span className="tag">crypto</span>
      </div>

      <div className="post-stats">
        <div>651,324 Views</div>
        <div>36,6545 Likes</div>
        <div>56 comments</div>
      </div>

      <div className="comments-section">
        <h4>Comments (56)</h4>
        <div className="comment">
          <img
            src="user-profile.png"
            alt="Commenter"
            className="comment-author-image"
          />
          <div className="comment-text">
            <p>This is an amazing insight about blockchain development!</p>
          </div>
        </div>
      </div>

      <div className="related-posts">
        <h4>Related Posts</h4>
        <div className="related-post">
          <img
            src="post-image.png"
            alt="Related Post"
            className="related-post-image"
          />
          <div>
            <h3>The 4-step SEO framework...</h3>
            <small>AR Jakir • 3 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadDetail;
