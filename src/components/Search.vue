<template>
  <section>
    <h1>Liste de produits</h1>
    <div class="search-container">
      <label for="search">Recherche:</label>
      <input
          type="text"
          id="search"
          name="search"
          v-model="searchTerm"
          @input="onInput"
      />
    </div>
    <div class="products">
      <router-link
          :to="{ name: 'product', params: { id: product.id } }"
          tag="div"
          class="product"
          v-for="product in filteredProducts"
          :key="product.id"
      >
        <div class="product-illustration">
          <img :src="product.image" />
        </div>
        <h2>
          {{ product.name }}
        </h2>
      </router-link>
    </div>
  </section>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters([
      'products'
    ]),
  },
  watch : {
    products () {
      this.search();
    }
  },
  data() {
    return {
      filteredProducts: [],
      searchTerm: "",
      searchTimeout: null,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {

      if (this.searchTerm === "") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter((product) => {
          return product.name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
              ? product.name
              : false;
        });
      }
    },
    onInput() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.search();
        this.searchTimeout = null;
      }, 200);
    }
  },
};
</script>

<style scoped>
.search-container {
  margin: 20px;
}
.search-container label {
  padding-right: 10px;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #61677c;
  text-shadow: 1px 1px 0 #fff;
}
.search-container input {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #61677c;
  text-shadow: 1px 1px 0 #fff;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 20px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  transition: all 0.2s ease-in-out;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product {
  width: 400px;
  height: 450px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
  0 0px 0 1px rgb(10 10 10 / 2%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
}
.product:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.product-illustration {
  height: 400px;
}
.product img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>