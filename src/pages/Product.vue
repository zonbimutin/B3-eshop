<template>
  <div class="Product" v-if="product">
    <div class="Product__Image">
      <img :src="product.image" alt="product.id" width="550" height="400">
    </div>
    <div class="Product__Name">
            <span class="">
                {{ product.name }}
            </span>
    </div>
    <div class="Product__Button">
      <button type="submit" @click="addToCart" class="Button_Buy">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Product",
  data() {
    return {
      product : null
    }
  },
  computed : {
    ...mapGetters([
      'products'
    ])
  },
  watch : {
    products() {
      this.load()
    }
  },
  mounted() {
    this.load();
  },
  methods : {
    load() {
      this.product = this.products.find(product => {
        const id = parseInt(this.$route.params.id);
        if (product.id === id) {
          return product;
        }
      });
    },
    addToCart() {
      this.$store.commit('cartadd',this.product);
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.Product {
}

.Product__Image {
}

.Product__Image img {
  border-radius: 15px;
}

.Product__Name, .Product__Button {
  margin-top:15px;
}

.Product__Button button {
  border: 1px solid #000000;
  border-radius:15px;
  height: 30px;
}

.Product__Button button:hover {
  background: red;
  cursor: pointer;
  transition: 250ms;
}
</style>
