import React from "react";
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Activities from "./Components/Activities";
import Booking from "./Components/Booking";
import Gallery from "./Components/Gallery";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
