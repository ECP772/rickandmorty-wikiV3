import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Btn from "./Status";
import "./styles.css";

const Filters = ({ setstatus, setspecies, setgender, setpageNumber }) => {
  return (
    <div className="fs-4 justify-content-center col-3">
      Filters
      <div class="accordion" id="accordionExample my-4  ">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Status
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Btn setpageNumber={setpageNumber} setstatus={setstatus} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Species
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Species setpageNumber={setpageNumber} setspecies={setspecies} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Gender
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Gender setpageNumber={setpageNumber} setgender={setgender} />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setstatus("");
          setspecies("");
          setgender("");
          setpageNumber(1);
        }}
        className="fs-6 text-decoration-underline clear text-center my-4"
      >
        {" "}
        Clear Filters
      </div>
    </div>
  );
};

export default Filters;
