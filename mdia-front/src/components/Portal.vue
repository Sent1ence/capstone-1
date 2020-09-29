<template>
  <v-row no-gutter>
    <v-col md="2" v-for="portal in portals" :key="portal.title">
      <v-hover v-slot:default="{ hover }">
        <v-card
          tile
          outlined
          :class="{ 'on-hover': hover }"
          class="pa-0 mb-2 portal"
          @click="$router.push(portal.path)"
        >
          <v-container class="pa-0">
            <v-card-text class="pa-0">
              <v-row justify="center" align="center">
                <v-icon size="75px" color="#b12a2a">{{ portal.icon }}</v-icon>
              </v-row>
              <v-row justify="center" align="center">
                <span
                  class="subtitle-1 portal__text"
                  :class="{ 'on-hover': hover }"
                  >{{ portal.title }}</span
                >
              </v-row>
            </v-card-text>
          </v-container>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Portal",
  data() {
    return {
      portals: [
        { title: "Bills", icon: "mdi-account-cash", path: "/" },
        { title: "Farms", icon: "mdi-barn", path: "/" },
        { title: "Equipments", icon: "mdi-tractor", path: "/Equipment" },
        { title: "Events", icon: "mdi-calendar", path: "/" },
        { title: "Board of Trustees", icon: "mdi-account-tie", path: "/" },
        { title: "Reports", icon: "mdi-file", path: "/" },
      ],
    };
  },
};
</script>