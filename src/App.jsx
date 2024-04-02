import { useState } from "react";
import "./App.css";
import { FeatureCard, Footer, Header, Testimonial } from "./components";
import { Testimonials, Features, Hero, Story } from "./Pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Features />
      <Story />
      <Footer />
    </>
  );
}

export default App;
