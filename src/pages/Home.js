import React from "react";
//import { Link } from "react-router-dom";
import "./../App.css";

// Components
//import WelcomeText from "../components/WelcomeText";

function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://placehold.co/1900x600/20c3e4/orange/svg?text=First+Slide"
              className="d-block w-100"
              alt="slider-img-1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://placehold.co/1900x600/20c3e4/orange/svg?text=Second+Slide"
              className="d-block w-100"
              alt="slider-img-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://placehold.co/1900x600/20c3e4/orange/svg?text=Third+Slide"
              className="d-block w-100"
              alt="slider-img-3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* // START ABOUT SECTION // */}
      <section className="sec-py" id="aboutSec">
        <div className="container text-center">
          <h3 className="text-info h1 fw-bold text-uppercase mb-3">About Us</h3>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="lead text-black-50">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* //END ABOUT SECTION // */}

      {/* // START ABOUT SECTION // */}
      <section className="sec-py bg-light" id="teamSec">
        <div className="container text-center">
          <h3 className="text-info h1 fw-bold text-uppercase mb-3">Our Team</h3>
          <p className="lead mx-auto text-black-50" style={{ maxWidth: 991 }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </p>
          <div className="row mt-5 gx-lg-5">
            <div className="col-md-4">
              <div class="card">
                <img
                  src="https://placehold.co/300x175/ccc/fff/svg?text=Image"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title fw-bolder">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-info text-light fw-bolder">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img
                  src="https://placehold.co/300x175/ccc/fff/svg?text=Image"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title fw-bolder">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-info text-light fw-bolder">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img
                  src="https://placehold.co/300x175/ccc/fff/svg?text=Image"
                  class="card-img-top"
                  alt="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title fw-bolder">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-info text-light fw-bolder">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
