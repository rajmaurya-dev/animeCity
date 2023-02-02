import React from "react";

const MainContent = ({ data, setAnimeinfo }) => {
  return (
    <>
      {data
        ? data.map((anime, index) => {
            return (
              <div
                onClick={() => setAnimeinfo(anime)}
                key={index}
                className="w-[230px] h-[300px] text-center shadow-lg relative"
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="img"
                  className="w-[70%] h-[70%] mx-auto"
                />
                <div className="anime-info  ">
                  <h1 className="text-blue-800 font-extrabold">
                    {anime.title}
                  </h1>
                  <div className="overlay">
                    <h4>{anime.title_japanese} </h4>
                    <h3>SYNOPSIS</h3>
                    <div className="w-[90%] h-[50%] mx-auto p-1 overflow-auto">
                      <p> {anime.synopsis} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};

export default MainContent;
