import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import HomePageCard from "./HomePageCard";
import HomePageMap from "./HomePageMap";

export class HomePage extends Component {
  state = {
    searchKey: "",
    searchType: "apartment",
    page: 1,
  };

  updateSearch = ({ searchKey, searchType }) => {
    this.setState({
      ...this.state,
      searchKey: searchKey.toLowerCase(),
      searchType: searchType,
    });
  };

  goToPrevPage = () => {
    this.setState({
      ...this.state,
      page: (this.state.page-1)
    });
  }

  goToNextPage = () => {
    this.setState({
      ...this.state,
      page: (this.state.page+1)
    });
  }

  render() {
    const pagination = this.props.places.filter(
      (n) => n.name.toLowerCase().indexOf(this.state.searchKey) > -1 && (n.type === this.state.searchType && this.state.searchType !== "")
    ).length > 4 ? (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={this.goToPrevPage}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={this.goToNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    ) : (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item disabled">
            <button className="page-link">Previous</button>
          </li>
          <li className="page-item disabled">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    );
    return (
      <div>
        <SearchBar updateSearch={this.updateSearch} />
        <hr className="featurette-divider" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5">
              <HomePageCard
                place={this.props.places}
                searchKey={this.state.searchKey}
                searchType={this.state.searchType}
                page={this.state.page}
              />
              {pagination}
            </div>
            <div className="col-sm-7 px-0">
              <HomePageMap
                place={this.props.places}
                searchKey={this.state.searchKey}
                searchType={this.state.searchType}
                page={this.state.page}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
