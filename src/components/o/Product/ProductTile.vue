<template>
    <div class="product-tile w-100">
        <div class="product-icons">
            
        </div>
        <router-link
            :to="{ name: 'product', params: { id: product.id}}"
        >
            <div class="product-cover">
                <product-image 
                    class="product-cover__thumb"
                    :alt="product.name"
                    :image="thumbnailObj"
                />
                <p class="">{{product.name}}</p>
                <p class="price">{{product.price}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import {ProductTile} from '@/maketplace/Product/ProductTile.js'
import ProductImage from '@/components/o/Product/ProductImage'
export default {
    name: 'ProductTile',
    mixins: [ProductTile],
    components:{
        ProductImage
    },
    props:{
    },
    computed:{
        thumbnailObj () {
            return {
                src: this.thumbnail,
                loading: this.thumbnail
            }
        },
    },

}
</script>

<style>

</style>