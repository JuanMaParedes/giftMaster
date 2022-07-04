import React from "react";

const GifScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3">
          <div className="d-flex text-white align-items-center ">
            <img
              src="https://media2.giphy.com/avatars/BruceLeeFoundation/TEB3VIIFBsMB.jpg"
              width={50}
              alt="avatar"
            />
            <p className="fw-bold ms-2 mb-0">Bruce Lee Foundation</p>
          </div>

          <div className="texto_small mt-3 text-muted">
            <p>
              We provide access for people to Bruce Lee’s practices and
              teachings to enhance personal growth and spread harmony.
            </p>
            <p className="fw-bold">Follow on:</p>
            <div className="text-white text-start w-100 d-flex justify-content-start">
              <div>
                <i
                  className="fa fa-facebook-square me-3"
                  aria-hidden="true"
                ></i>
                <i className="fa fa-twitter me-3" aria-hidden="true"></i>
                <i className="fa fa-instagram me-3" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 text-center text-white">
          <p>Título de gif</p>
          <img src="" alt="gif" />
        </div>
        <div className="col-3">
          <div className="text-white d-flex align-items-center mb-3">
            <i className="fa fa-heart-o fa-2x me-2" aria-hidden="true"></i>
            <span className="fw-bold">Favorite</span>
          </div>
          <div className="text-white d-flex align-items-center mb-3">
            <i className="fa fa-share fa-2x me-2" aria-hidden="true"></i>
            <span className="fw-bold">Share</span>
          </div>
          <div className="text-white d-flex align-items-center mb-3">
            <i className="fa fa-code fa-2x me-2" aria-hidden="true"></i>
            <span className="fw-bold">Embed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifScreen;
