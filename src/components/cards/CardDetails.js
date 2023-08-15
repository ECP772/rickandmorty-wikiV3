import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const CardDetails = () => {
  let { id } = useParams();
  const [fetchedData, setfetchedData] = useState([]);
  let { name, image, location, status, gender, species, origin } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  let data;
  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let json = await data.json();
      setfetchedData(json);
    })();
  }, [api]);
  if (fetchedData)
    data = (
      <div className="container d-flex justify-content-center my-5 ">
        <div>
          <h1 className=" text-center">{name}</h1>
          <img src={image} alt="" className="img-fluid" />
          {(() => {
            if (status === "Dead")
              return (
                <div className={` bg-danger my-2 text-center`}>{status}</div>
              );
            else if (status === "Alive")
              return (
                <div className={` bg-success my-2 text-center`}>{status}</div>
              );
            else
              return (
                <div className={` bg-secondary my-2 text-center `}>
                  {status}
                </div>
              );
          })()}
          <div className="content">
            <div className="fs-4">
              {" "}
              <span className="fw-bold">Gender</span> : {gender}
            </div>
            <div className="fs-4">
              <span className="fw-bold">Species</span> {species}
            </div>
            <div className="fs-4">
              <span className="fw-bold">Location</span> : {location?.name}
            </div>
            <div className="fs-4">
              <span className="fw-bold">Origin</span> : {origin?.name}
            </div>
          </div>
        </div>
      </div>
    );
  return <div> {data}</div>;
};

export default CardDetails;
