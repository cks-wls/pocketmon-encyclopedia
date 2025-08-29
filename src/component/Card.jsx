import React from "react";
import { useNavigate } from "react-router-dom";
export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col justify-center items-center gap-[10px] w-[150px] pb-[10px] border border-solid border-gray-100 rounded-[10px]"
      onClick={() => navigate(`detail/${pokemon.id}`)}
    >
      <img className="w-[120px]" src={pokemon.front} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </section>
  );
};
