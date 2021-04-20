<template>
  <h3 class="txt-align">Panier</h3>
  <div class="row">
    <li class="li-product" v-for="(product,index) in cart" :key="index">
      <div class="product-content d-flex space-between">
        <div class="img-content">
          <img class="img-product" v-bind:src="product.image"/>
        </div>
        <div class="inf-product">
          <p>{{ product.name }}</p>
          <em>{{ product.price }} €</em>
        </div>
        <button @click="$store.commit('cartremove',index)">x</button>
      </div>
    </li>
    <div class="txt-align">
      ToTal : <b>{{ total }} €</b>
    </div>
  </div>
  <div class="txt-align">
    <button class="btn-buy">Acheter</button>
  </div>
</template>

<script>
import {defineProps, reactive} from 'vue'
import {mapGetters} from 'vuex'

defineProps({
  msg: String
})

export default {
  computed : {
    ...mapGetters([
      'cart'
    ]),
    total() {
      return this.cart.reduce((old, current) => {
        return old + current.price;
      }, 0);
    }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  width: auto;
}

li {
  list-style-type: none;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  justify-content: center;
  width: 300px;
  padding: 1em;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 1em;

}

.img-product {
  width: 100px;
}

.btn-buy {
  background-color: cadetblue;
  color: white;
  border: none;
  padding: 10px;
  margin: 2px;
  text-align: center;
  border-radius: 5px;
}

.txt-align {
  text-align: center;
}

.d-flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

</style>
