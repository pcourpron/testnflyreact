import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Homepage } from "./pages/Homepage";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Initializer } from "./pages/Initializer";
import { Partners } from "./pages/Partners";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { cacheImages } from "./cacheImages";
import { PassangersBack } from "./pages/PassengersBack";
import { AboutTest } from "./pages/AboutTest";
import { AboutTesting } from "./pages/AboutTesting";
import { Footer } from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
const imageArray = [
  "/images/preboard.jpg",
  "/images/team.jpg",
  "/images/email.jpg",
];

function App() {
  const [showInit, setShowInit] = useState(true);

  useEffect(() => {
    cacheImages(imageArray, () => setTimeout(() => setShowInit(false), 1000));
  }, []);
  return (
    <div className="App">
      {showInit ? <Initializer /> : null}
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/partners" component={Partners} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/passengers-back" component={PassangersBack} />
        <Route path="/about-test-n-fly" component={AboutTest} />
        <Route path="/about-testing" component={AboutTesting} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
