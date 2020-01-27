import Vue from 'vue'
import App from './App.vue'
import InitiativePrompt from './components/InitiativePromp'
import vuetify from './plugins/vuetify';

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  methods: {
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
