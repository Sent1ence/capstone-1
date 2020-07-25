<template>
  <div class="board mx-4 mb-4">
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in boardOfTrustee" :key="person.BoardID">
          <v-card class="ma-3">
            <div align="center">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar" />
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="text-subtitle-1">{{person.Name}}</div>
                <div class="grey--text">{{person.Position}}</div>
              </v-card-text>
            </div>
            <v-card-action>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span class="caption">Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState(['boardOfTrustee'])
  }
};
</script>