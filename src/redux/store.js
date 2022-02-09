import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonReducer";
const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export default store;
