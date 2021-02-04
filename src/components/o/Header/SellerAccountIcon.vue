<template>
    <div 
        class="seller-account"
            data-testid="accountButton"
            @click.self="goToSellerAccount();showMenu = true;"
            @keyup.enter="goToSellerAccount"
            tabindex="0"
            role="button"
            @mouseover="showMenu = true"
            @mouseout="showMenu = false"
        >
        <button
            type="button"
            class="border-0 bg-light"
            data-target="#exampleModal">
            <icon-profile />
        </button>

    </div>
</template>

<script>
import IconProfile from '@/components/a/icon/IconProfile'
import SellerAccountIcon from '@/maketplace/SellerAccount/SellerAccountButton.js'
export default {
    name: "SellerAccountIcon",
    mixins: [SellerAccountIcon],
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