<template>
  <v-app id="app">
    <TopNav />
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
export default {
  components: {
    TopNav
  }
};
</script>