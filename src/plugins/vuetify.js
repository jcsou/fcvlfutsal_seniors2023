import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/sass/overrides.sass'

Vue.use(Vuetify);

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',

  colorPA: '#A9CCE3',
  colorPB: '#A2D9CE',
  colorPC: '#D2B4DE',
  colorPD: '#F1AF00',
  colorPE: '#F1948A',
  colorPF: '#CACFD2',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
