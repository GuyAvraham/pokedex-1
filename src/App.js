import React, { Fragment } from "react";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./components/pokemon-page/PokemonPage";

export default () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route excat path="/" element={<Main />} />
          <Route excat path="/pokemon-page" element={<PokemonPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
};
