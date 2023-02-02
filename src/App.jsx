import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AnimeInfo from "./components/AnimeInfo";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [animeData, setAnimeData] = useState();
  const [search, setSearch] = useState("");
  const [animeinfo, setAnimeinfo] = useState("");

  const GetData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=5`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    GetData();
  }, [search]);
  return (
    <>
      <Header />
      <form action="">
        <input
          type="search"
          placeholder="Search for an anime"
          onChange={(e) => setSearch(e.target.value)}
          required
          className="block w-[50%] p-4 pl-10 text-sm text-gray-900 border border-gray-700 rounded-lg bg-gray-50 mx-auto"
        />
      </form>
      <div className="flex justify-around gap-10 w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
        <div className="w-[30%]">
          {animeinfo && <AnimeInfo animeInfo={animeinfo} />}
        </div>

        <div className=" w-[70%] self-end  container flex flex-wrap gap-2">
          <MainContent data={animeData} setAnimeinfo={setAnimeinfo} />
        </div>
      </div>
    </>
  );
}

export default App;
