<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          :src="require('../public/logo-white.svg')"
          class="my-3 mr-3"
          contain
          width="40"
          height="40"
        />
      </div>
      <v-spacer/>

      <v-btn icon @click="openAddActor">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer=!drawer"/>
    </v-app-bar>

    <!-- Main Container -->
    <v-content id="main" style="width:100%;max-width:960px" class="mx-auto">
      <Tracker v-bind:tracker="tracker"/>
      <AddActor @add-actor="addActor"/>
    </v-content>

    <v-fab-transition>
      <v-btn v-show="tracker.length" @click="resetTracker" fab fixed bottom left dark color="primary">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-fab-transition>

    <!-- Side Menu -->
    <v-navigation-drawer app right v-model="drawer">
      <v-list rounded>
        <v-subheader>Actors</v-subheader>

        <v-list-item link v-for="(actor, i) in actors" :key="actor.id" @click="moveToTracker(actor, i)">
          <v-list-item-content>
            <v-list-item-title v-text="actor.name"/>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="destroyActor(i)">
              <v-icon color="secondary">mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
  #main {
    background-image: url('/logo.svg');
    background-size: 50%;
    background-position: center center;
    background-attachment: fixed;
  }
</style>

<script>
  import {eventBus} from './main.js'
  import Tracker from './components/Tracker.vue'
  import AddActor from "./components/AddActor"

  export default {
    name: 'App',
    components: {
      Tracker,
      AddActor
    },
    created() {
      this.loadState();
      window.addEventListener('beforeunload', this.saveState)
    },
    data: () => ({
      drawer: false,
      tracker: [],
      actors: [
        {
          id: 1,
          name: 'Example Character',
          bonus: 5,
          class: 'character',
        },
        {
          id: 2,
          name: 'Example Monster',
          bonus: 5,
          class: 'monster',
        }
      ]
    }),
    methods: {
      openAddActor() {
        eventBus.$emit('dialog', true);
      },
      addActor(newActor) {
        this.actors = [...this.actors, newActor];
      },
      destroyActor(index) {
          this.actors.splice(index, 1);
      },
      moveToTracker(actor, index) {
        this.tracker = [...this.tracker, actor];
        this.actors.splice(index, 1);
      },
      resetTracker() {
        let vm = this;
        this.tracker.forEach(actor => {
            vm.actors = [...vm.actors, actor];
        });
        this.tracker = [];
      },
      saveState() {
        window.console.log('save state');
        let ls = localStorage;
        ls.setItem('tracker', JSON.stringify(this.tracker));
        ls.setItem('actors', JSON.stringify(this.actors));
      },
      loadState() {
        window.console.log('load state');
        let ls = localStorage;
        if (ls.getItem('tracker')) {
            this.tracker = JSON.parse(ls.getItem('tracker'));
        }
        if (ls.getItem('actors')) {
            this.actors = JSON.parse(ls.getItem('actors'));
        }
      }
    }
  };
</script>
