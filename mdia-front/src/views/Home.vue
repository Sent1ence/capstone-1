<template>
  <div class="home">
    <h1>Homepage</h1>
    <div class="text-center">
      <v-btn depressed class="green white--text" rounded top>
        <v-icon left>mdi-account-arrow-right</v-icon>
        <span class="text-capitalize">Email</span>
      </v-btn>
      <v-btn class="mx-2" fab dark color="primary">
        <v-icon light>mdi-minus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
