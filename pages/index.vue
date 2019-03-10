<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-btn color="info" @click="addItem">
            Add item
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire"
          >Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { database } from '~/plugins/firebase'
import _ from 'lodash'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      items: []
    }
  },
  created () {
    const ref = database.ref("test")
    ref.on('value', data => {
      this.items = _.map(data.val(), _.identity)
    })
  },
  methods: {
    addItem () {
      const ref = database.ref("test")
      ref.push(this.items.length + 1)
    }
  }
}
</script>
