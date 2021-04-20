<template>
  <h2>App v0.0.5</h2>
  <div v-if="user">Bonjour</div>
  <img width="50" v-if="user" alt="profile" src="/profile.png" />
  <button class="butCo" v-if="user"  @click="deconnexion">Déconnexion</button>
  <button class="butCo" v-if="!user" @click="afficheLogin">Login</button>
  <input name="check" type="checkbox">

</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'user'
    ]),
  },
  data() {
    return {

    };
  },
  methods: {
    afficheLogin() {
      this.$router.push('/login');
    },
    deconnexion(){
      this.$store.dispatch('login', null)
    }
  }
};
</script>

<style>


.box {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1b1d29;
  text-align: center;
  border-radius: 10px;
}

.box h1 {
	color: white;
	text-transform: uppercase;
	font-weight: 500;
}

.box input[type=text], .box input[type=password] {
	border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
  border: 2px solid #3498db;
  border-radius: 24px;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  transition: 0.25s;
}

.box input[type=text]:focus, .box input[type=password]:focus {
  width: 250px;
  border-color: #2ecc71;
}

.box button {
  border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
  border: 2px solid #2ecc71;
  border-radius: 24px;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  transition: 0.25s;
}

.box button:hover {
	background: #2ecc71;
}

.butCo{
  border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
  border: 2px solid #2ecc71;
  border-radius: 24px;
  padding: 14px 10px;
  width: 100px;
  outline: none;
  color: rgb(0, 0, 0);
  transition: 0.25s;
}
.error{
  color: red;
}
</style>
