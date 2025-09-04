import ThreadItem from "./ThreadItem.jsx";

function ThreadList() {
  return (
    <>
      <div>
        <label htmlFor="cars">Category filter:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="content-grid">
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
      </div>
    </>
  );
}

export default ThreadList;
