import React from "react";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
// import { Project } from "./components/Project";
import fontawesome from "@fortawesome/fontawesome";
// import brands from '@fortawesome/fontawesome-free-brands';
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faFacebookSquare from "@fortawesome/fontawesome-free-brands/faFacebookSquare";
import faGithubSquare from "@fortawesome/fontawesome-free-brands/faGithubSquare";
import faEnvelopeSquare from "@fortawesome/fontawesome-free-solid/faEnvelopeSquare";
import faNewspaper from "@fortawesome/fontawesome-free-regular/faNewspaper";
import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";

fontawesome.library.add(
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
  faEnvelopeSquare,
  faNewspaper,
  faEnvelope
);

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
