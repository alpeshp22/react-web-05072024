import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

// Components
import WelcomeText from "../components/WelcomeText";

function Home() {
    return (
      <div className="container">
        <h2>Home Page</h2>
        <WelcomeText title="Lorem ipsum dolor sit amet, consectetur adip." />
        <Link to='/about' className="App-link">Go to about page</Link>
      </div>
    );
  }

export default Home;

