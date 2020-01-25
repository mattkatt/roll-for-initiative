<template>
  <v-container>
    <v-flex flex-column class="tracker">
      <Actor
        v-for="actor in tracker"
        :key="actor.id"
        :actor="actor"
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
  .tracker {
    padding-bottom: 64px;
  }

  @media (min-width: 1264px) {
    .tracker {
      padding-bottom: 0;
    }
  }
</style>