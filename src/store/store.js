import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      photos: [
         './image/desert-1270345_1920.jpg',
         "./image/desert-1654439_1920.jpg",
         "./image/fox-4589927_1920.jpg",
         "./image/lake-696098_1920.jpg",
         "./image/landscape-559434_1920.jpg",
         "./image/mountain-3374074_1920.jpg",
         "./image/mushroom-2786789_1920.jpg",
         "./image/nature-3063571_1920.jpg",
         "./image/nature-3170925_1920.jpg",
         "./image/nature-3254258_1920.jpg",
         "./image/nature-3362956_1920.jpg",
         "./image/river-593146_1920.jpg",
         "./image/sunflower-1127174_1920.jpg",
         "./image/sunset-2297961_1920.jpg",
         "./image/tree-99852_1920.jpg",
         "./image/tree-569275_1920.jpg",
         "./image/tree-2723012_1920.jpg",
         "./image/tree-2723012_1920.jpg"
      ],
      thumbnails: [],
      currentPage: 0,
      currentIndex: 0,


   },
   mutations: {
      SET_PHOTOS_TO_STATE: (state, urls) => {
         state.photos = state.photos.concat(urls);
      },
      UPDATE_THUMBNAILS: (state) => {
         const firstIndex = state.currentPage * 9;
         const lastIndex = Math.min((state.currentPage + 1) * 9, state.photos.length);

         const pageImages = state.photos.slice(firstIndex, lastIndex);
         state.thumbnails = pageImages;
      },
      INCRIMENT_CURRENT_PAGE: (state) => {
         const maxPage = Math.ceil(state.photos.length / 9);
         if (state.currentPage + 1 < maxPage) {
            state.currentPage += 1;
            state.currentIndex = 0;
            store.commit('UPDATE_THUMBNAILS');
         }
      },
      DECRIMENT_CURRENT_PAGE: (state) => {
         if (state.currentPage > 0) {
            state.currentPage -= 1;
            state.currentIndex = 8;
            store.commit('UPDATE_THUMBNAILS');
         }
      },
      INCRIMENT_CURRENT_INDEX: (state) => {
         if (state.currentIndex == 8) {
            store.commit('INCRIMENT_CURRENT_PAGE');
         } else if (state.currentIndex < state.thumbnails.length - 1) {
            state.currentIndex += 1;
         }
      },
      DECRIMENT_CURRENT_INDEX: (state) => {
         if (state.currentIndex == 0) {
            store.commit('DECRIMENT_CURRENT_PAGE')
         } else {
            state.currentIndex -= 1;
         }
      }
   },
   actions: {
      GET_PHOTOS_FROM_FLICKR({ commit }) {
         return axios('https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=9c0b191a1d8415714a70a2a3db4abdeb&extras=url_m&text=nature', {
            method: "GET",
         })
            .then((photos) => {
               const urls = photos.data.photos.photo.map((item) =>
                  item.url_m
               );
               let index = Math.floor(Math.random() * (urls.length - 1));
               const random_photo = urls[index]
               commit('SET_PHOTOS_TO_STATE', random_photo);
               commit("UPDATE_THUMBNAILS");

            })
            .catch((error) => alert(error))
      },
      UPDATE_THUMBNAILS({ commit }) {
         commit('UPDATE_THUMBNAILS');
      },
      INCRIMENT_CURRENT_PAGE({ commit }) {
         commit('INCRIMENT_CURRENT_PAGE');
      },
      DECRIMENT_CURRENT_PAGE({ commit }) {
         commit('DECRIMENT_CURRENT_PAGE');
      },
      INCRIMENT_CURRENT_INDEX({ commit }) {
         commit('INCRIMENT_CURRENT_INDEX');
      },
      DECRIMENT_CURRENT_INDEX({ commit }) {
         commit('DECRIMENT_CURRENT_INDEX');
      }
   },
   getters: {
      PHOTOS(state) {
         return state.photos
      }
   }

});

export default store;