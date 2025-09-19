import LoadingBar from "react-redux-loading-bar";

function Loading() {
  return (
    <div className="loading">
      <LoadingBar
        style={{
          backgroundColor: "blue",
          height: "5px",
          border: "solid red 1px",
        }}
      />
    </div>
  );
}

export default Loading;
