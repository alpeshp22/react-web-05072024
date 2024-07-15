import React from "react";

const Contact = () => {
  return (
    <section className="sec-py bg-light" id="teamSec">
      <div className="container">
        <h3 className="text-info text-center h1 fw-bold text-uppercase mb-3">
          Contact Us
        </h3>
        <p className="lead col-lg-8 mx-auto text-center text-black-50">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour,
        </p>
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <form className="form row g-3 border p-3 bg-white rounded-4 shadow-sm">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  maxlength="13"
                  minlength="10"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-info text-light fw-bold px-md-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
