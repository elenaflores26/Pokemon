import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [listaPokemons, setListaPokemons] = useState([]);
  var datosJson; //

  const leerPokemons = async () => {
    fetch("").then(()=>{}).then(()=>{}).catch();
    try {
      const datosSinFormato = await fetch("https://pokeapi.co/api/v2/pokemon/");
      datosJson = await datosSinFormato.json();
      const datosJson = await datosSinFormato.json();
      setNext(datosJson.next); //
    } catch (error) {
      Swal.fire("Error", "No se pudo conectar al API", "error");
      console.error(error);
    }
    
    let pokemons = datosJson.results.map(async (pokemon) => {
      
      const datosPokemonRaw = await fetch(pokemon.url); //
      const datosPokemon = await datosPokemonRaw.json(); //
      return datosPokemon;
    });
    Promise.all(pokemons).then((respuestas)=>{
      setListaPokemons([...listaPokemons,...respuestas]);
    console.log(listaPokemons[0].sprites.other.showdown.front_default)
    });
  };

  useEffect(() => {
    leerPokemons();
  }, []);

  return (
    <section className="col-sm-12 col-lg-8 d-flex justify-content-center flex-wrap z-1 mt-5">
      <PokemonCard url={1} />
    </section>
  );
};

export default Pokedex;
