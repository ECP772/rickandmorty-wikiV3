import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Cards = ({ results }) => {
  console.log(results);
  let display;
  if (results) {
    display = results.map((element) => {
      let { id, name, image, location, status } = element;
      return (
        <Link to={`${id}`} key={id} className="col-4 position-relative">
          <div className="card mb-4">
            <img src={image} alt={name} className="img-fluid img " />
            <div className="contents">
              <div className="fs-4 fw-bold">{name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
              {(() => {
                if (status === "Dead")
                  return (
                    <span
                      className={`badge bg-danger position-absolute top-0 m-2`}
                    >
                      {status}
                    </span>
                  );
                else if (status === "Alive")
                  return (
                    <span
                      className={`badge bg-success position-absolute top-0 m-2`}
                    >
                      {status}
                    </span>
                  );
                else
                  return (
                    <span
                      className={`badge bg-secondary position-absolute top-0 m-2`}
                    >
                      {status}
                    </span>
                  );
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters found";
  }
  return <>{display}</>;
};

export default Cards;
