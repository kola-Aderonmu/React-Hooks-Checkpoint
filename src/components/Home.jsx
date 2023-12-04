import React, { useMemo, useState } from "react";
import VideoPlayer from "./Video";
import ActionWords from "./ActionWords";
import Navbar from "./Navbar";
import moviesData from "./data";
import Filter from "./Filter";
import CreateNewMovie from "./CreateNewMovie";
import MovieList from "./MovieList";




const Home = () => {
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
      <ActionWords />
      <VideoPlayer />
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
};

export default Home;
