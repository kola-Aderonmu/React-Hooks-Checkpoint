import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moviesData from "./data";
import ReactPlayer from "react-player";

export const Trailer = () => {
  const { MovieId } = useParams();
  const theMovie = moviesData.find((movie) => movie.id === Number(MovieId));
  console.log(theMovie);
  return (
    <>
      (
      <div className="flex flex-col space-y-8">
        <Link to="/" className="no-underline">
          <Button className="p-2 mt-4 ml-5 items-start bg-red-200 font-mono font-semibold">
            Return To Home
          </Button>
        </Link>
        <div className="h-[70vh] grid place-items-center bg-slate-200">
          {/* Button to return to prev page */}

          {/* movie title */}
          <h2 className="text-4xl font-extrabold font-mono mt-5 mb-5">{theMovie.title}</h2>
          {/* Trailer frame */}
          <iframe
            className="w-[450px] md:w-[600px] h-[300px] rounded-2xl"
            src={encodeURI(theMovie.trailer)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* Description */}
          <p className="w-[600px] mx-auto bg-gray-300 text-center p-10 max-10 font-sans rounded-2xl">
            ...{theMovie.description}
          </p>
        </div>
      </div>
      )
    </>
  );
};
