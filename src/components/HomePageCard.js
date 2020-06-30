import React from "react";

export default function HomePageCard(props) {
  const { place } = props;
  let filteredPlace = place.filter(n => n.name.toLowerCase().indexOf(props.searchKey) > -1 && (n.type === props.searchType && props.searchType !== ""));
  const placeResult = place.length ? (
    /* .filter() .slice(0, 4) */
    filteredPlace.slice(0, 4).map((place) => {
      return (
        <div className="col-lg-6" key={place.id}>
          <div className="card mb-3 box-shadow">
            <img
              className="card-img-top"
              src={place.images.primary}
              alt={place.name}
            />
            <div className="card-body">
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <p>|| {place.address.city}</p>
              <a
                href={"/details/" + place.id}
                role="button"
                className="btn btn-sm btn-outline-secondary"
              >Detail</a>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading ...</p>
  );

  return <div className="row">{placeResult}</div>;
}
