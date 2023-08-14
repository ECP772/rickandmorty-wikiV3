import React from "react";
import "./styles.css";

const Btn = ({ setstatus, setpageNumber }) => {
  return (
    <ul>
      <li className="my-2">
        <button
          onClick={() => {
            setstatus("alive");
            setpageNumber(1);
          }}
        >
          Alive
        </button>
      </li>
      <li className="my-2">
        <button
          onClick={() => {
            setstatus("dead");
            setpageNumber(1);
          }}
        >
          Dead
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setstatus("Unknown");
            setpageNumber(1);
          }}
        >
          Unknown
        </button>
      </li>
    </ul>
  );
};

export default Btn;
