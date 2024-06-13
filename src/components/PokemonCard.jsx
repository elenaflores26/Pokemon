import React from "react";
import "./PokemonCard.css"
const PokemonCard = ({ url }) => {
  return (
    <div className=" card col-sm-5 p-3 col-md-2 m-3 pb-1  rounded border border-secondary d-flex flex-column align-items-center">
      <p className="col-12 text-end  fs-4 text-success">#1</p>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
          url +
          ".png"
        }
        alt=""
        className="col-10"
      />
      <p>Ditto</p>
    </div>
  );
};

export default PokemonCard;
