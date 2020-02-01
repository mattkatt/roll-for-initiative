<template>
  <v-dialog
    persistent
    v-model="showOverlay"
    max-width="500"
  >
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
          <div class="d-flex">
            <v-btn large rounded color="primary" @click="validate" class="flex-grow-1">Add</v-btn>
            <v-btn large rounded color="primary" @click="rollForCharacter" class="pa-0 ml-6" style="min-width:44px">
              <v-icon>{{ icons.d20 }}</v-icon>
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mdiDiceD20} from '@mdi/js';
  export default {
    name: 'InitiativePrompt',
    created() {
      for(let i=1; i <= 20; i++) {
        this.possibleRolls = [... this.possibleRolls, {
          text:i,
          value:i
        }]
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
      initiativeRoll: 0,
      icons: {
          d20: mdiDiceD20
      }
    }),
    methods : {
      validate() {
        if(this.$refs.form.validate()) {
          this.setInitiative(this.initiativeRoll)
        }
      },
      rollForCharacter() {
        let roll =  Math.floor(Math.random() * 19) + 1;
        this.setInitiative(roll);
      },
      setInitiative(initiativeRoll) {
        this.$emit('submit-initiative', initiativeRoll);
      }
    }
  }
</script>

<style scoped>

</style>