<template>
  <div
        @click.self="goToAccount();showMenu = true;"
        @keyup.enter="goToAccount"
        @mouseover="showMenu = true"
        @mouseout="showMenu = false"
    >
        <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            >
            <icon-profile />
        </button>
    </div>
</template>

<script>
import IconProfile from '@/components/a/icon/IconProfile'
import AccountIcon from '@/maketplace/SellerAccount/AccountIcon.js'

export default {
    name: "SellerAccountIcon",
    mixins: [AccountIcon],
    data(){
        return{
            showMenu: false,
        }
    },
    components:{
       IconProfile

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
button{
    display: block;
    width: 100%;
    border: none;
    background: border-box;
    pointer-events: none;
    &:focus{
        background: none;
    }
}
</style>