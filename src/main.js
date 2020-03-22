import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import AddActor from "./components/AddActor";
import InitiativePrompt from './components/InitiativePrompt'
import vuetify from './plugins/vuetify';

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  Vuex,
  vuetify,
  render: h => h(App),
  methods: {
    addActor: function() {
      return new Promise(resolve => {
        const AddActorVue = Vue.extend(AddActor);
        const addActorUI = new AddActorVue({
          vuetify
        });

        addActorUI.$once('add-actor', value => {
          addActorUI.$destroy();
          addActorUI.$el.remove();
          resolve(value);
        });

        addActorUI.$mount();
        document.body.appendChild(addActorUI.$el);
      })
    },

    getInitiative: function(activeActor) {
      return new Promise(resolve => {
        const InitiativePromptVue = Vue.extend(InitiativePrompt);
        const initiativePromptUI = new InitiativePromptVue({
          vuetify,
          data: () => ({
            actor: activeActor
          })
        });

        initiativePromptUI.$once('submit-initiative', value => {
          initiativePromptUI.$destroy();
          initiativePromptUI.$el.remove();
          resolve(value);
        });

        initiativePromptUI.$mount();
        document.body.appendChild(initiativePromptUI.$el);
      });
    }
  }
}).$mount('#app');
