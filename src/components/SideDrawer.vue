<template>
  <v-navigation-drawer
    app right
    v-model="drawer"
  >
    <v-list rounded>
      <v-subheader>Characters</v-subheader>

      <v-list-item
        link
        v-for="actor in actorsCharacters"
        :key="actor.id"
        @click.stop="moveToTracker(actor)"
        class="actor character"
      >
        <v-list-item-content>
          <v-list-item-title v-text="actor.name"/>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon outlined @click.stop="destroyActor(actor.id)">
            <v-icon color="secondary">{{ closeIcon }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-subheader>Monsters/NPCs</v-subheader>

      <v-list-item
        link
        v-for="actor in actorsMonsters"
        :key="actor.id"
        @click.stop="moveToTracker(actor)"
        class="actor monster"
      >
        <v-list-item-content>
          <v-list-item-title v-text="actor.name"/>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon outlined @click.stop="destroyActor(actor.id)">
            <v-icon color="secondary">{{ closeIcon }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {eventBus} from '../main';
  import {mdiClose} from '@mdi/js';

  export default {
    name: 'SideDrawer',
    props: {
      actors: Array
    },
    computed: {
      actorsCharacters() {
        return this.actors.filter(actor => {
            return actor.class === 'character'
        });
      },
      actorsMonsters() {
        return this.actors.filter(actor => {
            return actor.class === 'monster'
        });
      }
    },
    data: () => ({
      drawer: false,
      initiativeActive: false,
      closeIcon: mdiClose
    }),
    created() {
      let vm = this;
      eventBus.$on('open-drawer', value => {
        vm.initiativeActive = value;
        vm.drawer = true;
      });
    },
    mounted() {
      if(this.$vuetify.breakpoint.lgAndUp) {
        this.drawer = true;
      }
    },
    methods: {
      destroyActor(id) {
        this.$emit('destroy-actor', id);
      },
      moveToTracker(actor) {
        this.$emit('move-to-tracker', actor);
        if (this.initiativeActive) {
          this.drawer = false;
        }
      },
    }
  }
</script>

<style>
  .v-navigation-drawer .actor {
    padding: 0 8px 0 16px;
    border: 1px solid #888
  }

  .v-navigation-drawer .actor.character {
    border-color: rgba(0,128,0,0.25);
  }

  .v-navigation-drawer .actor.monster {
    border-color: rgba(255,0,0,0.25);
  }

  .v-navigation-drawer .actor.character:hover {
    background-color: rgba(0,128,0,0.05);
  }

  .v-navigation-drawer .actor.monster:hover {
    background-color: rgba(255,0,0,0.05);
  }

  .v-navigation-drawer .actor .v-list-item__action {
    margin: 0;
  }
</style>