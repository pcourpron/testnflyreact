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

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
