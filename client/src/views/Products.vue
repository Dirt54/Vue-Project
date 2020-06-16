<template>
  <ul id="products">
    <h3>Games</h3>
    <li v-for="product in products" :key="product">{{ product }}</li>
  </ul>
</template>

<script>
export default {
  el: "#products",

  data: () => ({
    products: ["Stardew Valley", "Halo 3", "Sonic The Hedgehog"]
  })
};
</script>
