import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/actions/pokemonActions";
import { pokemonActions } from "../../redux/reducers/pokemonReducer";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const Main = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemons = useSelector((pokemon) => pokemon.pokemons.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons);
  }, []);

  const selectedPokemonHandler = (pokemon) => {
    dispatch(pokemonActions.selectedPokemon(pokemon));
  };

  const filteredQuery = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container text-center">
      <input
        className="text-center"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredQuery.map((pokemon, index) => {
          return (
            <div key={index} className="col-md-4 p-2">
              <Card
                name={pokemon.name}
                img={pokemon.sprites.front_default}
                weight={pokemon.weight}
              />
              <Link
                to={"/pokemon-page"}
                onClick={() => {
                  selectedPokemonHandler(pokemon);
                }}
              >
                STATS
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
