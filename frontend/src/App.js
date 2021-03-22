import React from "react";
import Darkmode from "darkmode-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainScreen from "./screens/MainScreen";
import FaqScreen from "./screens/FaqScreen";
import AboutUsScreen from "./screens/AboutUsScreen";

function App() {
  const options = {
    bottom: "64px",
    backgroundColor: "#fff",
    label: "🌓",
    time: "0.6s",
    autoMatchOsTheme: false,
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={MainScreen} exact />
          <Route path="/faq" component={FaqScreen} />
          <Route path="/about" component={AboutUsScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
