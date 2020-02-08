<template>
  <v-dialog
    v-model="showOverlay"
    max-width="500"
  >
    <v-card class="pa-2">
      <v-card-title class="px-4 py-2">Settings</v-card-title>
      <v-list>
        <v-list-item
          v-for="(setting, key) in settings"
          :key="key"
        >
          <v-list-item-content>
            <v-list-item-title v-text="key"/>
          </v-list-item-content>

          <v-list-item-action>
            <v-switch
              :model="settings[setting]"
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn
          color="primary"
          class="ml-auto"
          @click="showOverlay = false"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "SettingsPanel",
    props: {
      settings: Object
    },
    data: () => ({
      showOverlay: true
    }),
  }
</script>

<style scoped>

</style>