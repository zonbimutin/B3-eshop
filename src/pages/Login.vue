<template>
  <div class="box" >
    <input
        v-model="inputUsername"
        type="text"
        name="username"
        id="username"
        placeholder="username"
        autocomplete="off"
    />
    <input
        v-model="inputPassword"
        type="password"
        name="password"
        placeholder="password"
        id="password"
    />
    <span class="error" v-if="formErreur">Infos incorrectes</span>
    <button @click="onValidate">login</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      validPassword:"password",
      validUsername:"zoro",
      inputUsername: "",
      inputPassword: "",
      showLoginPage:false,
      logged: false,
      formErreur:false,
    };
  },
  methods : {
    onValidate() {
      if (this.inputUsername === "" || this.inputPassword === "") {
        this.formErreur = true;
      } else if (
          this.inputUsername.trim() === this.validUsername &&
          this.inputPassword === this.validPassword
      ) {
        this.$store.dispatch('login', {name : 'zoro'})
        this.formErreur = false;

        this.$router.back();
      } else {
        this.formErreur = true;
      }
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
