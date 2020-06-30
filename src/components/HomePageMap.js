import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

export class HomePageMap extends Component {
  state = {
    center: {
      lat: -6.2107875,
      lng: 106.8198491,
    },
    zoom: 15,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  onMouseover = (props, marker, e) =>
    this.setState({
      ...this.state,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  render() {
    const style = {
      minHeight: "400px"
    };
    let filteredPlace = this.props.place.filter(
      (n) =>
        n.name.toLowerCase().indexOf(this.props.searchKey) > -1 &&
        n.type === this.props.searchType &&
        this.props.searchType !== ""
    );
    const MarkerList = this.props.place.length
      ? filteredPlace.slice(0, 4).map((place) => {
          return (
            <Marker
              onMouseover={this.onMouseover}
              key={place.id}
              title={place.name}
              name={place.description}
              placeID={place.id}
              position={{
                lat: place.address.latitude,
                lng: place.address.longitude,
              }}
            ></Marker>
          );
        })
      : "";

    const getMap = filteredPlace.length ? (
      <Map
        initialCenter={this.state.center}
        zoom={this.state.zoom}
        google={this.props.google}
      >
        {MarkerList}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.title}</h4>
            <p>{this.state.selectedPlace.name}</p>
            <a
              href={"/details/" + this.state.selectedPlace.placeID}
              role="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Detail
            </a>
          </div>
        </InfoWindow>
      </Map>
    ) : (
      ""
    );

    return <div style={style}>{getMap}</div>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAA4n9pwQq1cP-7knNesfTJsYJyP2WCkSU",
})(HomePageMap);
