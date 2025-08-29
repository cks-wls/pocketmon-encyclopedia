import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./rtk/thunk";
import { Search } from "./pages/Search.jsx";
import { Favorite } from "./pages/Favorite.jsx";
import { Detail } from "./pages/Detail.jsx";
import { Main } from "./pages/Main.jsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);
  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link className="no-underline" to={"/"}>
          메인
        </Link>
        <Link className="no-underline" to={`/detail/1`}>
          상세정보
        </Link>
        <Link className="no-underline" to={"search"}>
          검색
        </Link>
        <Link className="no-underline" to={"favorite"}>
          찜목록
        </Link>
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
