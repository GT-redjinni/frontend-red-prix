import axios from "axios";

const state = {
  country: [],
  states: [],
  cities: [],
};

const getters = {
  getCountryData: (state) => state.country,
  getStateData: (state) => state.states,
  getCityData: (state) => state.cities,
};

const actions = {
  async getCountry({ commit }) {
    try {
      // const apiurl = "https://uatapi.redrestro.com/public/api/";
      const apiurl = "https://api.redrestro.com/public/api/";

      const response = await axios.get(`${apiurl}countries`);

      //   console.log(response.data.data);

      commit("SET_COUNTRY", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },

  async getStatesOfCountry({ commit }, countryId) {
    try {
      // const apiurl = "https://uatapi.redrestro.com/public/api/";
      const apiurl = "https://api.redrestro.com/public/api/";

      // params: {
      //   country_id: countryId,
      // },
      const response = await axios.get(
        `${apiurl}states_of_country/${countryId}`
      );

      commit("SET_STATES", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },

  async getCitiesOfState({ commit }, stateId) {
    try {
      // const apiurl = "https://uatapi.redrestro.com/public/api/";
      const apiurl = "https://api.redrestro.com/public/api/";

      // params: {
      //   state_id: stateId,
      // },

      const response = await axios.get(`${apiurl}cities_of_state/${stateId}`);

      commit("SET_CITIES", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  SET_COUNTRY(state, countryData) {
    state.country = countryData;
  },

  SET_STATES(state, statesData) {
    state.states = statesData;
  },

  SET_CITIES(state, citiesData) {
    state.cities = citiesData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
