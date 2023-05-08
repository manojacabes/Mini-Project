import "./../../assets/style/Search.css";

function Searchbutton() {
  return (
    <div>
      <form>
        <div className="row text-center">
          <div className="col-sm-3">
            <input
              type="text"
              placeholder="Batch"
              className="SearchField text-center"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              placeholder="Email"
              className="SearchField text-center"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              placeholder="Dept"
              className="SearchField text-center"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="button"
              className="SearchButton text-center"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Searchbutton;
