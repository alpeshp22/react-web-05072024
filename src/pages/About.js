import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div style={{padding:20}}>
            <h1>About page</h1>
            <Link to="/" className="App-link">back to home</Link>
        </div>
    )
}

export default About;