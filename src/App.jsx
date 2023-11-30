import reactLogo from "./assets/react.svg";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { Button } from "antd";
import Filter from "./components/Filter";
import CreateNewMovie from "./components/CreateNewMovie";
import moviesData from "./components/data";
import { useMemo, useState } from "react";

function App() {
  //Creating a useState management for movie
  const [myMovies, setmyMovies] = useState(moviesData);
  const [random, setRandom] = useState(0);

  //Lets memorise the my movies in a useMemo Hook

  const memorizedMovies = useMemo(() => {
    return {
      myMemorizedMovies: myMovies,
    };
  }, [random]);
  //*****************************
  // *****************************

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto flex justify-between pt-8">
        {/* filter components */}
        // **********************************
        <Filter setmyMovies={setmyMovies} memorizedMovies={memorizedMovies} />
        <CreateNewMovie
          setmyMovies={setmyMovies}
          memorizedMovies={memorizedMovies}
          setRandom={setRandom}
        />{" "}
      </div>
      {myMovies.length === 0 ? (
        <div className="text-center py-24 text-3xl">
          Searched movies did not return any result
        </div>
      ) : (
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
}

export default App;
