import React from "react";

// Navigation Bar

const Navbar = () => {
  return (
    <nav className="p-6 shadow-2xl">
      <div
        className="max-w-4xl mx-auto flex items-center gap-4"
        style={{
          background: "linear-gradient(45deg, #FF6B6B, #556270)",
          borderRadius: "24%",
          position: "sticky",
          top: "0",
          zIndex: "100",
        }}
      >
        <img
          src="https://img.freepik.com/premium-photo/popcorn-bucket-clapper-board-film-reel-inside-big-movie-theater_285885-2748.jpg?w=740"
          alt="brand logo"
          className="w-16 rounded-md"
          style={{ width: "110px" }}
        />
        <h2
          className="text-900 tracking-widest"
          style={{
            fontSize: "20px",
            color: "#ffe135",
          }}
        >
          Movie App
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
