<template>
  <v-container>
    <v-flex flex-column>
      <Actor
        v-for="actor in tracker"
        v-bind:key="actor.id"
        v-bind:actor="actor"
        class="ma-2"
      />
    </v-flex>
  </v-container>
</template>

<script>
  import {eventBus} from '../main';
  import Actor from './Actor'

  export default {
    name: 'Tracker',
    components: {
      Actor
    },
    props: {
      tracker: Array,
    },
    created() {
      let vm = this;
      eventBus.$on('initiative-rolled', () => {
        vm.sort()
      });
    },
    methods: {
      sort() {
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
      }
    }
  }
</script>

<style>

</style>