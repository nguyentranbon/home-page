<template>
  <div
    class="product-image"

  >
    <img
        :alt="alt"
        class="product-image__thumb"
        v-lazy="image.src"
        
    >
  </div>
</template>

<script>
export default {
    name: "ProductImage",
    data(){
        return {

        }
    },
    props:{
        alt:{
            type: String,
            default: '',
        },
        image:{
            type: Object,
            default:()=>({
                src: '',
            })
        }
    }
}
</script>

<style>

</style>