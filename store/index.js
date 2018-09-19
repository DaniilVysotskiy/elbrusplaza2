import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Polyfill for `window.fetch()`
require('whatwg-fetch')

const store = () => new Vuex.Store({
  state: {
    locales: ['ru', 'en'],
    locale: 'ru',
    authUser: null,
    roomsList: [],
    room: {}
  },

  mutations: {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    },
    SET_USER(state, user) {
      state.authUser = user
    },
    FETCH_ROOMS(state, rooms) {
      state.roomsList = rooms;
    },
    FETCH_ROOM(state, room) {
      state.room = room;
    }
  },

  actions: {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },

    async login({ commit }, { username, password }) {
      try {
        const { data } = await axios.post('/api/login', { username, password })
        commit('SET_USER', data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },

    async logout({ commit }) {
      await axios.post('/api/logout')
      commit('SET_USER', null)
    },

    async fetchRooms({ commit })  {
      try {
        const { data } = await axios.get('/api/rooms');
        commit('FETCH_ROOMS', data);
      } catch (error) {
        throw error;
      }
    },

    async fetchRoom({ commit }, { type })  {
      try {
        const { data } = await axios.get('/api/room/' + type);
        commit('FETCH_ROOM', data[0]);
      } catch (error) {
        throw error;
      }
    }
  }
})

export default store