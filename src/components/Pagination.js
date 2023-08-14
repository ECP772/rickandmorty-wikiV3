import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setpageNumber, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      pageCount={info?.pages}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousClassName="btn"
      nextClassName="btn "
      previousLabel="Prev"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setpageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
