import React from 'react'

export default function DetailsPageFacilities(props) {
  const facilityList = props.facility.length ? (
    props.facility.map(facility => {
      return(
        <button type="button" className="btn btn-secondary mr-1" key={facility}>{facility}</button>
      )
    })
  ) : (<p>No facilities listed</p>);
  return (
    <div>
      {facilityList}
    </div>
  )
}
