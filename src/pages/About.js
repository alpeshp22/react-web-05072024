import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="sec-py bg-light">
      <div className="container text-center">
        <h3 className="text-info text-center h1 fw-bold text-uppercase mb-3">
          About page
        </h3>
        <p className="lead text-black-50">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <Link to="/" className="text-light btn btn-lg btn-info fw-bold">
          <i className="bi bi-arrow-left-circle me-1"></i> Back to home
        </Link>
      </div>
    </section>
  );
}

export default About;
