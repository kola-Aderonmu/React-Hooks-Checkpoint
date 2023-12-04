import React from "react";

const VideoPlayer = () => {
  return (
    <div className="m-4 bg-slate-700 rounded-3xl">
      <h2 className="text-white p-10 tracking-wide font-extrabold text-4xl font-mono">
        Top Trended
      </h2>
      <div className="flex overflow-x-scroll">
        <div className="flex items-center justify-start px-10 ">
          <iframe
            title="Embedded Content"
            width="440"
            height="350"
            src="https://www.youtube.com/embed/G_AEL-Xo5l8?si=uQYgMW6XQG6w5PCf&amp;controls=0"
            frameBorder="0"
            allowFullScreen
            className="m-4 rounded-2xl"
          ></iframe>
          <iframe
            width="440"
            height="350"
            src="https://www.youtube.com/embed/k5PnsPHtarY?si=A7ktR-44jJ_NbBQJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="m-4 rounded-2xl"
          ></iframe>
          <iframe
            width="440"
            height="350"
            src="https://www.youtube.com/embed/SWh4c9EVqGM?si=f5rqRhDWI7Kbicu4&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="m-4 rounded-2xl"
          ></iframe>
          <iframe
            width="440"
            height="350"
            src="https://www.youtube.com/embed/KbU50SdL8zA?si=mXfnJa-OEXGV33ma&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="m-4 rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
