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

    <!-- Side Menu -->
    <v-navigation-drawer app right v-model="drawer">
      <v-list rounded>
        <v-subheader>Actors</v-subheader>

        <v-list-item link v-for="actor in actors" :key="actor.id" @click="moveToTracker(actor)">
          <v-list-item-content>
            <v-list-item-title v-text="actor.name"/>
          </v-list-item-content>
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
    data: () => ({
      drawer: false,
      tracker: [],
      actors: [
        {
            id: 1,
            name: 'Wren',
            bonus: 5,
            class: 'character',
        },
        {
            id: 2,
            name: 'Janus',
            bonus: 3,
            class: 'character',
        },
        {
            id: 3,
            name: 'Goblin',
            bonus: 2,
            class: 'monster'
        },
        {
            id: 4,
            name: 'Worg',
            bonus: 3,
            class: 'monster'
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
      moveToTracker(actor) {
        this.tracker = [...this.tracker, actor]
      }
    }
  };
</script>
