<template>
  <div class="product-listing">
      <div
        v-for="(product, key) in products"
        :key="key"
      >
        <product-tile :product="product" />
      </div>
  </div>
</template>

<script>
import ProductTile from '@/components/o/Product/ProductTile'
export default {
    name: 'ProductListing',
    components:{
        ProductTile

    },
    props:{
        products:{
            type: null,
        },

    }
}
</script>

<style>

</style>