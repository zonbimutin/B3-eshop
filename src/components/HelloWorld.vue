<template>
  <div>
    <input type="file" @change="onFileChange" />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'products'
    ]),
  },
  watch : {
    products () {
      console.log('products change', this.products.length);
    }
  },
  mounted() {
    console.log('products',this.products.length);

  },
  methods : {
    onFileChange(e) {

      const files = e.currentTarget.files;

      if (files.length > 0)
      {
        const fileToLoad = files[0];
        const fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent)
        {
         console.log('fileLoadedEvent.target.result',fileLoadedEvent.target.result);
        };

        fileReader.readAsDataURL(fileToLoad);
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
