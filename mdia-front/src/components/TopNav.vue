<template>
  <div class="nav">
    <v-container>
      <v-app-bar dense flat app transition="slide-y-transition" color="brown darken-4" dark>
        <v-app-bar-nav-icon class="white--text hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <router-link to="/">
          <v-avatar size="40" class="grey lighten-2 mr-3">
            <img src="/avatar/logo.png" />
          </v-avatar>
          <span
            class="font-weight-medium green--text text--lighten-3 mb-3 hidden-sm-and-down"
          >Musuan-Dologon Irrigation Association</span>
          <span
            class="font-weight-medium text-h6 green--text text--lighten-3 mb-3 hidden-md-and-up"
          >MDIA</span>
        </router-link>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" color="white" class="nav-menu mr-2 brown darken-1">
              <v-icon left>mdi-chevron-down</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in userlinks" :key="link.title" :to="link.path">
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text class="nav-out">
          <v-icon>mdi-export</v-icon>
          <span>Sign Out</span>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        class="secondary text-uppercase"
        width="250"
        app
        disable-resize-watcher
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/69.jpg" />
            </v-list-item-avatar>

            <v-list-item-content class="grey--text">
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle class="grey--text text-uppercase">Administrator</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in links" :key="item.text" router :to="item.path">
            <v-list-item-icon>
              <v-icon class="grey--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item v-for="item in userlinks" :key="item.text" router :to="item.path">
            <v-list-item-icon>
              <v-icon class="grey--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      drawer: false,
      appTitle: "MDIA",
      links: [
        { title: "Home", icon: "mdi-home", path: "/" },
        {
          title: "Board Members",
          icon: "mdi-account-group-outline",
          path: "/Board-members",
        },
        {
          title: "Equipment",
          icon: "mdi-robot-industrial",
          path: "/Equipment",
        },
      ],
      userlinks: [
        { title: "Profile", icon: "mdi-account", path: "/Profile-page" },
        { title: "Create Farmer Account", icon: "mdi-account-plus", path: "/" },
        { title: "Sign Out", icon: "mdi-export", path: "/" },
      ],
    };
  },
};
</script>