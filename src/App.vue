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
        <v-icon>{{ icons.plus }}</v-icon>
      </v-btn>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="openDrawer"
      >
        <v-icon>{{ icons.menu }}</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Main Container -->
    <v-content id="main" style="width:100%;max-width:960px" class="mx-auto">
      <Tracker :tracker="tracker"/>
      <AddActor @add-actor="addActor"/>
    </v-content>

    <v-fab-transition>
      <v-btn
        fab fixed bottom left dark color="primary"
        class="btn--left"
        v-show="tracker.length"
        @click="resetTracker"
      >
        <v-icon :size="32">{{ icons.reload }}</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-fab-transition>
      <v-btn
        fab fixed bottom right dark color="primary"
        :class="{ 'btn--right' : $vuetify.breakpoint.lgAndUp }"
        v-show="tracker.length"
        @click="rollForInitiative"
      >
        <v-icon v-if="!rolling" :size="32">{{ icons.d20 }}</v-icon>
        <v-progress-circular
          v-else
          :indeterminate="true"
          :rotate="0"
          :size="32"
          :width="4"
          color="white"
        />
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
  import {eventBus} from './main';
  import {mdiMenu, mdiPlus, mdiReload, mdiDiceD20} from '@mdi/js';
  import SideDrawer from './components/SideDrawer';
  import Tracker from './components/Tracker';
  import AddActor from './components/AddActor';

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
      tracker: [],
      actors: [],
      initiativeActive: false,
      rolling: false,
      activeActor: null,
      icons: {
        menu: mdiMenu,
        plus: mdiPlus,
        reload: mdiReload,
        d20: mdiDiceD20
      }
    }),
    methods: {
      openAddActor() {
        eventBus.$emit('open-add-actor', true);
      },
      openDrawer() {
        eventBus.$emit('open-drawer', this.initiativeActive);
      },
      addActor(newActor) {
        this.actors = [...this.actors, newActor];
      },
      destroyActor(id) {
        this.actors = this.actors.filter(function( obj ) {
          return obj.id !== id;
        });
      },
      async moveToTracker(actor) {
        this.tracker = [... this.tracker, actor];
        this.destroyActor(actor.id);

        if (this.initiativeActive) {
          if (actor.class === 'character') {
              let result = await this.rollInitiativeForCharacter(actor);
              actor.currentInitiative = parseInt(result)
          }

          if (actor.class === 'monster') {
            this.rollInitiativeForActor(actor);
          }

          this.sortTracker();
        }
      },
      async rollForInitiative() {
        this.initiativeActive = true;
        this.rolling = true;

        for (const actor of this.tracker) {
          if (actor.class === 'character') {
            let result = await this.rollInitiativeForCharacter(actor);
            actor.currentInitiative = parseInt(result)
          }

          if (actor.class === 'monster') {
            this.rollInitiativeForActor(actor);
          }
        }

        this.rolling = false;
        this.sortTracker();
      },
      rollInitiativeForActor(actor) {
        let roll =  Math.floor(Math.random() * 19) + 1;
        actor.currentInitiative = parseInt(actor.bonus) + roll;
      },
      async rollInitiativeForCharacter(actor) {
        this.activeActor = actor;

        let result = await this.$root.getInitiative(actor);

        return result + parseInt(actor.bonus);
      },
      sortTracker() {
        this.tracker.sort(this.compareInitiative);
      },
      compareInitiative(actorA, actorB) {
        let a = actorA,
            b = actorB;

        // Compare currentInitiative
        if (a.currentInitiative < b.currentInitiative) {
          return 1;
        }

        if (a.currentInitiative > b.currentInitiative) {
          return -1;
        }

        // In case of initiative tie, compare bonus
        if (a.bonus < b.bonus) {
          return 1;
        }

        if (a.bonus > b.bonus) {
          return -1;
        }

        // In case of bonus tie, characters win
        if (a.class !== b.class) {
          if (b.class === 'character') {
            return 1;
          }

          return -1
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
        ls.setItem('initiativeActive', JSON.stringify(this.initiativeActive));
      },
      loadState() {
        let ls = localStorage,
            tracker = ls.getItem('tracker'),
            actors = ls.getItem('actors'),
            initiative = ls.getItem('initiativeActive');

        this.tracker = tracker ? JSON.parse(tracker) : this.tracker;
        this.actors = actors ? JSON.parse(actors) : this.actors;
        this.initiativeActive = initiative ? JSON.parse(initiative) : this.initiativeActive;
      }
    }
  };
</script>

<style>
  #main {
    background-image: url('/logo.svg');
    background-size: 250px;
    background-position: center center;
    background-attachment: fixed;
  }

  .btn--left {
    padding-left: 2px;
  }

  .btn--right {
    right: 270px !important;
  }
</style>