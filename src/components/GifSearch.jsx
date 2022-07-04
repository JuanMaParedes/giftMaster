import React from "react";

const GifSearch = () => {
  return (
    <div className="container sticky-top">
      <div className="row">
        <div className="col bg-dark">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input_search"
              placeholder="Search all the Gif"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-search" type="button" id="button-addon2">
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifSearch;
