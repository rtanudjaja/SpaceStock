import React, { Component } from "react";
import { connect } from "react-redux";
import DetailsPageFacilities from "./DetailsPageFacilities";
import DetailsPageMap from "./DetailsPageMap";

export class DetailsPage extends Component {
  render() {
    const placeDetail = this.props.place ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 py-1">
            <h3>{this.props.place.name}</h3>
            <p>{this.props.place.description}</p>
            <p>
              Address: {this.props.place.address.street},{" "}
              {this.props.place.address.city},{" "}
              {this.props.place.address.country}
            </p>
            <h3>Facilities</h3>
            <DetailsPageFacilities facility={this.props.place.facilities} />
          </div>
          <div className="col-sm-6 mx-0 px-0 py-1">
            <DetailsPageMap
              longitude={this.props.place.address.longitude}
              latitude={this.props.place.address.latitude}
            />
          </div>
        </div>
      </div>
    ) : (
      <p>No location found</p>
    );

    const jumbotronStyle = {
      backgroundImage: "url(" + this.props.place.images.primary + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "300px",
    };

    const carouselIndicators = this.props.place.images.others.length
      ? this.props.place.images.others.map((image, order) => {
          return (
            <li
              key={order}
              data-target="#imageCarousel"
              data-slide-to={order + 1}
            ></li>
          );
        })
      : "";

    const imageCarouselStyle = {
      maxWidth: "500px"
    };

    const carouselImages = this.props.place.images.others.length
      ? this.props.place.images.others.map((image, order) => {
          return (
            <div className="carousel-item" key={order}>
              <div className="container" style={imageCarouselStyle}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={"slide " + (order + 2)}
                />
              </div>
            </div>
          );
        })
      : "";

    return (
      <div>
        <div className="jumbotron" style={jumbotronStyle}></div>
        {placeDetail}

        <hr className="featurette-divider" />

        <div id="imageCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#imageCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            {carouselIndicators}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container" style={imageCarouselStyle}>
                <img
                  className="d-block w-100"
                  src={this.props.place.images.primary}
                  alt="slide 1"
                />
              </div>
            </div>
            {carouselImages}
          </div>
          <a
            className="carousel-control-prev"
            href="#imageCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#imageCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.place_id;
  return {
    place: state.places.find((place) => place.id === id),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
