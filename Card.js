import React from "react"

export default function Card(props) {
    return (
        <div className="section">
            <img src={props.imageUrl} />
            <div className="container">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="viewpoint">{props.title}</h1>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}