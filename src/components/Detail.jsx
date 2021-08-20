import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css";
const Detail = ({ data }) => {
  const { id } = useParams();
  const detailInfo = data.map((each) => {
    if (each.id === id) {
      return (
        <div className="each-container">
          <img src={each.logo_url} alt=""></img>
          <div className="detailed-info">
            <div className="info">
              <p>Business Name: </p>
              <p className="detail-info">{each.name}</p>
            </div>
            <div className="info">
              <p>Business Address: </p>
              <p className="detail-info">{each.address}</p>
            </div>
            <div className="info">
              <p>Business Website: </p>
              <p className="detail-info">
                <a href={each.website_url}>{each.website_url}</a>
              </p>
            </div>
            <div className="business-hours">
              <p>Business Hours: </p>
              <div className="hours">
                <p>{each.hours.Monday}</p>
                <p>{each.hours.Tuesday}</p>
                <p>{each.hours.Wednesday}</p>
                <p>{each.hours.Thursday}</p>
                <p>{each.hours.Friday}</p>
                <p>{each.hours.Saturday}</p>
                <p>{each.hours.Sunday}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="detail-container">
      <Link to="/">Back to Places</Link>
      {detailInfo}
    </div>
  );
};

export default Detail;
