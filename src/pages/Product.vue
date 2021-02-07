<template>
  <div id="product">
    <section class="product-detail">
      <div class="container">
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>