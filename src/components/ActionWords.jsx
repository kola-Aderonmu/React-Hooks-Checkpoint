import React, { useEffect, useState } from 'react'


const ActionWords = () => {
     const movieWords = [
       { word: "Action", color: "#ff5733" },
       { word: "Adventure", color: "#33ff57" },
       { word: "Sci-Fi", color: "#5733ff" },
       { word: "Drama", color: "#ff33c5" },
       { word: "Comedy", color: "#ffcf33" },
       { word: "Fantasy", color: "#6e33ff" },
       { word: "Thriller", color: "#337cff" },
       { word: "Horror", color: "#ff335e" },
       { word: "Animation", color: "#33ffb5" },
     ];

     const [randomMovieWord, setRandomMovieWord] = useState({
       word: "",
       color: "",
     });

     useEffect(() => {
       // Function to update the random movie word
       const updateRandomMovieWord = () => {
         const randomIndex = Math.floor(Math.random() * movieWords.length);
         setRandomMovieWord(movieWords[randomIndex]);
       };

       // Update the random movie word initially and every 5 seconds
       updateRandomMovieWord();
       const interval = setInterval(updateRandomMovieWord, 1000);

       // Clean up the interval when the component is unmounted
       return () => clearInterval(interval);
     }, []);


  return (
    <>
      <div className="text-7xl text-center font-serif p-4">
        <div style={{ color: randomMovieWord.color }}>
          <span className='tracking-widest'>{randomMovieWord.word}</span>
        </div>
      </div>
    </>
  );
}

export default ActionWords