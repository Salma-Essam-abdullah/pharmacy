import logo from "./logo.svg";
import "./App.css";
import Header from "./shared/Header";
import Slider from "./Slider";
import Doctors from "./Doctors";
import Adv from "./Adv";
import FooterInfo from "./shared/FooterInfo";
import Footer from "./shared/Footer";
import Doc from "./Doc";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App2() {
  return (
    <>
      <Header />
      <Slider />
      <Doc />
      <Adv />
      <FooterInfo />
      <Footer />
    </>
  );
}

export default App2;
