import "./add-thread.css";

function AddThread() {
  return (
    <div className="post-form">
      <div className="form-group">
        <label>Title</label>
        <input type="text" placeholder="Enter post title..." name="title" />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          rows="8"
          placeholder="Write your post here..."
          name="body"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Category</label>
        <input type="text" placeholder="Category" name="category" />
      </div>

      <button className="create-button">Publish Post</button>
    </div>
  );
}

export default AddThread;
