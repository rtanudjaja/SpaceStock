import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class DetailsPageMap extends Component {
  render() {
    const mapCenter = {
      lat: parseFloat(this.props.latitude),
      lng: parseFloat(this.props.longitude)
    };
    const style = {
      height: "300px",
    };
    return (
      <div style={style}>
        <Map initialCenter={mapCenter} zoom={15} google={this.props.google}>
          <Marker position={mapCenter} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAA4n9pwQq1cP-7knNesfTJsYJyP2WCkSU",
})(DetailsPageMap);
