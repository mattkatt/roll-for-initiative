<template>
  <v-card class="actor" :class="actor.class">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-text="actor.name"/>
        <v-list-item-subtitle>Initiative: +{{ actor.bonus }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar>
        <v-icon
          v-if="actor.currentInitiative === false"
          color="primary" class="icon--spinning"
        >mdi-loading</v-icon>
        <span v-else>
          {{ actor.currentInitiative }}
        </span>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'Actor',
    props: [
      "actor"
    ]
  }
</script>

<style scoped>
  .actor {
    border-left: 5px solid #fff;
  }
  .character {
    border-left-color: green !important;
  }
  .monster {
    border-left-color: red !important;
  }
  .icon--spinning {
    animation: icon--spinning 1s infinite linear;
  }

  @keyframes icon--spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>