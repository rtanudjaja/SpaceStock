import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    searchKey: "",
    searchType: "apartment"
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchKey: e.target.value
    });
  };

  handleSelectChange = (e) => {
    this.setState({
      ...this.state,
      searchType: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateSearch(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="form-row" onSubmit={this.handleSubmit}>
          <div className="col-7">
            <label>Press enter to search:</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control mx-1"
              id="searchInput"
              placeholder="search"
            />
          </div>
          <div className="col-5">
            <label>Unit Type:</label>
            <select className="form-control mx-1" value={this.state.searchType} onChange={this.handleSelectChange}>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar