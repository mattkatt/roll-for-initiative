<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          :src="logo"
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

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="openDrawer"
      />
    </v-app-bar>

    <!-- Main Container -->
    <v-content id="main" style="width:100%;max-width:960px" class="mx-auto">
      <Tracker :tracker="tracker"/>
      <AddActor @add-actor="addActor"/>
    </v-content>

    <v-fab-transition>
      <v-btn
        fab fixed bottom left dark color="primary"
        v-show="tracker.length"
        @click="resetTracker"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-fab-transition>
      <v-btn
        fab fixed bottom right dark color="primary"
        v-show="tracker.length"
        @click="rollForInitiative"
      >
        <v-icon>mdi-dice-d20</v-icon>
      </v-btn>
    </v-fab-transition>

    <!-- Side Menu -->
    <SideDrawer
      :actors="actors"
      @destroy-actor="destroyActor"
      @move-to-tracker="moveToTracker"
    />
  </v-app>
</template>

<script>
  import {eventBus} from './main'
  import SideDrawer from './components/SideDrawer';
  import Tracker from './components/Tracker'
  import AddActor from './components/AddActor'

  export default {
    name: 'App',
    components: {
      SideDrawer,
      Tracker,
      AddActor
    },
    mounted() {
      this.loadState();
      window.addEventListener('beforeunload', this.saveState);
      window.setInterval(this.saveState, 60000);
    },
    data: () => ({
      logo: require('../public/logo-white.svg'),
      drawer: false,
      tracker: [],
      actors: [],
      initiativeActive: false
    }),
    methods: {
      openAddActor() {
        eventBus.$emit('open-add-actor', true);
      },
      openDrawer() {
        eventBus.$emit('open-drawer', true);
      },
      addActor(newActor) {
        this.actors = [...this.actors, newActor];
      },
      destroyActor(id) {
        this.actors = this.actors.filter(function( obj ) {
          return obj.id !== id;
        });
      },
      moveToTracker(actor) {
        this.tracker = [... this.tracker, actor];
        this.destroyActor(actor.id);

        if (this.initiativeActive) {
          this.rollInitiativeForActor(actor);
          this.sortTracker();
        }
      },
      rollForInitiative() {
        this.initiativeActive = true;
        this.tracker.forEach(this.rollInitiativeForActor);
        this.sortTracker();
      },
      rollInitiativeForActor(actor) {
        let roll =  Math.floor(Math.random() * 19) + 1;
        actor.currentInitiative = parseInt(actor.bonus) + roll;
      },
      sortTracker() {
        this.tracker.sort(this.compareInitiative);
      },
      compareInitiative(actorA, actorB) {
        let a = actorA.currentInitiative,
            b = actorB.currentInitiative;

        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      },
      resetTracker() {
        let vm = this;

        this.tracker.forEach(actor => {
          actor.currentInitiative = false;
          vm.actors = [...vm.actors, actor];
        });

        this.tracker = [];
        this.initiativeActive = false;
      },
      saveState() {
        let ls = localStorage;

        ls.setItem('tracker', JSON.stringify(this.tracker));
        ls.setItem('actors', JSON.stringify(this.actors));
      },
      loadState() {
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

<style>
  #main {
    background-image: url('/logo.svg');
    background-size: 50%;
    background-position: center center;
    background-attachment: fixed;
  }
</style>