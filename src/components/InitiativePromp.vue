<template>
  <v-dialog v-model="showOverlay">
    <v-card>
      <v-card-title class="mb-4">Initiative Roll for {{ actor.name }}</v-card-title>
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form"
        >
          <v-select
            outlined
            v-model="initiativeRoll"
            :items="possibleRolls"
            :rules="rules"
            label="Die Roll"
          />
          <v-btn block rounded color="primary" @click="validate">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'InitiativePrompt',
    created() {
      window.console.log('InitiativePrompt Created');
      for(let i=1; i <= 20; i++) {
        this.possibleRolls = [... this.possibleRolls, {text:i,value:i}]
      }
    },
    data: () => ({
      showOverlay: true,
      valid: false,
      possibleRolls: [
        {
          text: 'Select Result',
          value: 0
        }
      ],
      rules: [
        v => v > 0 || 'Please select a roll'
      ],
      initiativeRoll: 0
    }),
    methods : {
      validate() {
        if(this.$refs.form.validate()) {
          this.setInitiative()
        }
      },
      setInitiative() {
        this.$emit('submit-initiative', this.initiativeRoll);
      }
    }
  }
</script>

<style scoped>

</style>