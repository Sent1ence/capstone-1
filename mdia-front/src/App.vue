<template>
  <v-app id="app" class="grey ligten-4">
    <TopNav />
    <v-content>
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