import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokadex",
  initialState: {
    pokemons: [],
    selectedPokemon: {},
  },
  reducers: {
    fetchPokemonsList(state, action) {
      state.pokemons.push(action.payload);
    },
    selectedPokemon(state, action) {
      state.selectedPokemon = action.payload;
    },
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
