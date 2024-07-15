import React, { Suspense, lazy } from "react";
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";

// IMPORT STYLES
import "./App.css";

// IMPORT COMPONENTS
import Layout from "./pages/Layout";
import Loader from "./components/Loader";

// IMPORT PAGES
const HOME = lazy(() => loading(import("./pages/Home")));
const ABOUT = lazy(() => loading(import("./pages/About")));
const CONTACT = lazy(() => loading(import("./pages/Contact")));

// PAGE LOADER FUCTION
function loading(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/about" index element={<ABOUT />} />
            <Route path="/contact" index element={<CONTACT />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
