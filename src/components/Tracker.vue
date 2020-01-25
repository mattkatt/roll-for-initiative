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
  import Actor from './Actor'

  export default {
    name: 'Tracker',
    components: {
      Actor
    },
    props: {
      tracker: Array,
    }
  }
</script>

<style>

</style>