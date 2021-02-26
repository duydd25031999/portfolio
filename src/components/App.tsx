import React from "react";
import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Footer from "./Footer.tsx";
import data from "../data.ts";
import { Resume } from './app.type'

const App: React.FC = () => {
  const resume: Resume = data
  return (
    <React.Fragment>
      <Header name={data.first_name} nav={data.nav} />
      <Main data={resume} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
