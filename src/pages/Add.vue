<template>
  <div class="AddProduct">
    <h1>Add New Product</h1>
    <span>v1.0</span>
    <form class="AddProduct__form" @submit="handleFormSubmit" @reset="handleFormReset">
      <div class="form-group AddProduct__input">
        <label for="name">Name:</label>
        <input id="name" v-model="name" name="name" type="text">
      </div>
      <div class="form-group AddProduct__input">
        <label for="image">Image:</label>
        <img :src="previewImage" class="AddProduct__imagePreview"/>
        <input type="file" id="image" accept="image/jpeg" @change=uploadImage>
      </div>
      <div class="form-group AddProduct__actions">
        <button type="submite">Create</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
    <p v-if="error">
      <b>{{ error }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
      error: null
    }
  },
  methods: {
    handleFormSubmit(e) {
      e.preventDefault()

      let name = e.target['name'].value
      let products = [];
      let ls = localStorage.getItem('products');
      if (ls) {
        products = window.JSON.parse(ls)
      }

      if (name && this.previewImage) {
        let newProduct = {
          id: Math.round(Math.random() * 1000),
          name: name,
          image: this.previewImage,
          price: Math.floor(Math.random() * 1000 + 1)
        }

        products.push(newProduct)
        try {
          localStorage.setItem('products', JSON.stringify(products))
          e.target.reset()
        } catch (error) {
          this.error = 'Full disk sorry :('
          console.log(error)
        }

      }

    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
      };
    },
    handleFormReset(e) {
      this.previewImage = null
      this.errors = []
    }
  }
}

</script>

<style scoped>

.AddProduct {
  width: 500px;
  margin: auto;
}

.AddProduct__form {
  display: felx !important;
  flex-direction: column;
}

.AddProduct__input > label {
  margin-right: 1rem;
}

.form-group {
  margin: 1rem 0;
}

.AddProduct__imagePreview {
  width: 200px;
}

</style>