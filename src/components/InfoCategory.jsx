import React from "react";

const InfoCategory = ({datos}) => {
  return (
    <div className="col-3  d-flex flex-column align-items-center animate__animated animate__fadeIn">
      <div className="img_col">
        <img src={datos.imagen} alt={datos.categoria} className="img_paginas" />
      </div>
      <div className="texto_small mt-3 text-muted mx-5">
        <p>{datos.texto}</p>
        <p className="fw-bold">Follow on:</p>
        <div className="text-white text-start w-100 d-flex justify-content-start">
          <div>
            <i className="fa fa-facebook-square me-3" aria-hidden="true"></i>
            <i className="fa fa-twitter me-3" aria-hidden="true"></i>
            <i className="fa fa-instagram me-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCategory;
