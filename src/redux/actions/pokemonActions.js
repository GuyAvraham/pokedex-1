import axios from "axios";
import { pokemonActions } from "../reducers/pokemonReducer";
import { apiConfig, endPoints } from "../../api/apiConfig";

function fetchData(endpoint, callback) {
  axios
    .get(apiConfig.baseUrl + endpoint)
    .then((response) => {
      response.data.results.map((result) => {
        axios.get(result.url).then((res) => {
          callback(res.data);
        });
      });
    })
    .catch((error) => {
      return error;
    });
}

export function fetchPokemons(dispatch) {
  fetchData(endPoints.allPokemons, (data) => {
    dispatch(pokemonActions.fetchPokemonsList(data));
  });
}
