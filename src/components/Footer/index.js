import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-info text-light text-center p-3 mt-3">
      Designed by{" "}
      <Link
        to={"https://apsolutions.w3spaces.com/my-resume.html"}
        className="text-decoration-none text-light fw-bold"
        target="_blank"
      >
        Alpesh Parmar.
      </Link>
    </div>
  );
}
export default Footer;
