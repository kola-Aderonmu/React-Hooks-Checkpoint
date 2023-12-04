import reactLogo from "./assets/react.svg";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { Button } from "antd";
import Filter from "./components/Filter";
import CreateNewMovie from "./components/CreateNewMovie";
import moviesData from "./components/data";
import { useMemo, useState } from "react";

import Home from "./components/Home";
import { Trailer } from "./components/Trailer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/:MovieId" element={<Trailer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
