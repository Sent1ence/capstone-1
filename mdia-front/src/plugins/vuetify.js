import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7ed5f6',
        secondary: '#2f303a',
        info: '#5cdb8f',
        success: '#39dc79',
        error: '#ff8000',
      },
    },
  },
});
