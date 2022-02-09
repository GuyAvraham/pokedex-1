import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PokemonPage = () => {
  let navigate = useNavigate();
  const pokemon = useSelector((pokemon) => pokemon.pokemons.selectedPokemon);

  console.log(pokemon);
  useEffect(() => {
    if (Object.keys(pokemon).length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {Object.keys(pokemon).length != 0 && (
        <>
          <a href="/">Back</a>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={pokemon.sprites.front_default}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <option>Abilities</option>
                <select class="form-select" aria-label="Default select example">
                  {pokemon.abilities.map((ability, index) => (
                    <option key={index}> {ability.ability.name} </option>
                  ))}
                </select>
              </div>
              <div className="col">
                {" "}
                <option>Stats</option>
                <select class="form-select" aria-label="Default select example">
                  {pokemon.stats.map((stat, index) => (
                    <option key={index}>
                      {" "}
                      {stat.stat.name}: {stat.base_stat}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonPage;
