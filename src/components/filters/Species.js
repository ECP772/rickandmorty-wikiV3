import React from "react";

const Species = ({ setspecies, setpageNumber }) => {
  return (
    <ul>
      <li className="my-2">
        <button
          onClick={() => {
            setspecies("human");
            setpageNumber(1);
          }}
        >
          Human
        </button>
      </li>
      <li className="my-2">
        <button
          onClick={() => {
            setspecies("alien");
            setpageNumber(1);
          }}
        >
          Alien
        </button>
      </li>
      <li className="my-2">
        <button
          onClick={() => {
            setspecies("robot");
            setpageNumber(1);
          }}
        >
          Robot
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setspecies("Unknown");
            setpageNumber(1);
          }}
        >
          Unknown
        </button>
      </li>
    </ul>
  );
};

export default Species;
