<template>
    <div 
        class="seller-account"
            @click.self="goToSellerAccount();showMenu = true;"
            @mouseover="showMenu = true"
            @mouseout="showMenu = false"
            role="button"
        >
        <button
            type="button"
            class="border-0 bg-light">
            <icon-profile />
        </button>
        <template :class="['dropdown-content bg-cl-primary align-left sans-serif lh20 weight-400', !showMenu ? 'dropdown-content__hidden' : '']">
            <div>asdas</div>
        </template>
    </div>
</template>

<script>
import IconProfile from '@/components/a/icon/IconProfile'
import SellerAccount from '@/maketplace/SellerAccount/SellerAccount.js'
export default {
    name: "SellerAccountIcon",
    mixins: [SellerAccount],
    data(){
        return{
            showMenu: false,
        }
    },
    components:{
        IconProfile,
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>