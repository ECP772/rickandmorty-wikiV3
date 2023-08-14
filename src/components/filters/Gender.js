import React from "react";

const Gender = ({ setgender, setpageNumber }) => {
  return (
    <ul>
      <li className="my-2">
        <button
          onClick={() => {
            setgender("male");
            setpageNumber(1);
          }}
        >
          Male
        </button>
      </li>
      <li className="my-2">
        <button
          onClick={() => {
            setgender("female");
            setpageNumber(1);
          }}
        >
          Female
        </button>
      </li>
      <li className="my-2">
        <button
          onClick={() => {
            setgender("genderless");
            setpageNumber(1);
          }}
        >
          Genderless
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setgender("Unknown");
            setpageNumber(1);
          }}
        >
          Unknown
        </button>
      </li>
    </ul>
  );
};

export default Gender;
