import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Cards";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Search from "./components/search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/cards/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
const Home = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [search, setsearch] = useState("");
  const [fetchedData, setfetchedData] = useState([]);
  const [status, setstatus] = useState("");
  const [species, setspecies] = useState("");
  const [gender, setgender] = useState("");

  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let res = await fetch(api);
      let data = await res.json();
      setfetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4d ">
        Rick & Morty{" "}
        <span
          className="text-primary
          "
        >
          WiKi
        </span>
      </h1>

      <Search setpageNumber={setpageNumber} setsearch={setsearch} />

      <div className="container">
        <div className="row">
          <Filters
            setstatus={setstatus}
            setspecies={setspecies}
            setgender={setgender}
            setpageNumber={setpageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setpageNumber={setpageNumber}
      />
    </div>
  );
};

export default App;
