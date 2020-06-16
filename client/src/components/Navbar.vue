<template>
  <v-toolbar dark>
    <v-container>
      <v-row d-flex justify-space-around>
        <v-col>
          <v-btn class="mr-2">
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn class="mr-2">
            <router-link to="/about">About</router-link>
          </v-btn>
          <v-btn class="mr-2">
            <router-link to="/products">Products</router-link>
          </v-btn>
        </v-col>
        <v-col>
          <h2 class="mr-2 text-center">Tootle</h2>
        </v-col>
        <v-col>
          <i class="fa fa-search fa-2x float-right" aria-hidden="true"></i>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>
