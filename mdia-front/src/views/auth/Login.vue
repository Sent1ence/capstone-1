<template>
  <AuthTemplate>
    <template #title> Sign in </template>
    <template #form>
      <v-text-field label="username" v-model="username" :rules="usernameRules" />
      <v-text-field label="password" v-model="password" :rules="passwordRules" />
    </template>
    <template #actions>
      <v-btn @click="submit" color="#3cd1c2" class="white--text">Submit </v-btn>
    </template>
  </AuthTemplate>
</template>
<script>
import AuthTemplate from "./AuthTemplate";
import{  mapActions } from 'vuex'
export default {
  name: "Login",
  components: { AuthTemplate },
  data() {
    return {
      username: "",
      password: "",
      usernameRules: [(v) => !!v || "Username is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.login(payload)
    }
  }
};
</script>