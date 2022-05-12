export default function Search(props){
    return(
        <form className="d-none d-sm-inline-block form-inline ml-md-3 my-2 my-md-0 mw-100 col-4">
        <div className="input-group">
          <input type="text" className="form-control border-1 small" onChange={props.actionSearch}  placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={props.handleSearch}>
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
    )
}