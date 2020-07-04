<template>
  <v-app>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>



<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
