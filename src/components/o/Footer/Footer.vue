<template>
    <footer id="footer">
        <div class="footer-menu fixed-bottom bg-white text-center w-100">
            <div class="wrapper">
                <div class="tab-bar-warp">
                    <icon-ordered-list />
                </div>
                <div class="tab-bar-warp">
                    <icon-home />
                </div>
                <div class="tab-bar-warp">
                    <icon-chat/>
                </div>
                <div class="tab-bar-warp">
                    <icon-cat />
                </div>
                <div class="tab-bar-warp">
                     <account-icon />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
import IconOrderedList from '@/components/a/icon/IconOrderedList'
import IconHome from '@/components/a/icon/IconHome'
import IconChat from '@/components/a/icon/IconChat'
import IconCat from '@/components/a/icon/IconCat'

import AccountIcon from '@/components/o/Header/AccountIcon'



export default {
    data(){
        return{
            
        }
    },
    components: {
        IconOrderedList,
        IconChat,
        IconCat,
        IconHome,
        AccountIcon

    },
    methods:{
        gotoAccount () {
            this.$bus.$emit('modal-toggle', 'modal-signup')
        },

    },
    computed: {
        ...mapState({
            isOpenLogin: state => state.ui.signUp,
        }),
    },

}
</script>

<style lang="scss">
footer{
    .footer-menu{
        box-shadow: 10px -1px 10px rgba(0, 0, 0, .075);
        height: 74px;
    }
    .wrapper{
        display: grid;
        grid-template-columns: repeat(5,1fr);

        .tab-bar-warp {
            height: 76px;
            line-height: 76px;
            cursor: pointer;
            position: relative;
            // &:hover::before{
            //     background: red;
            //     height: 50%;
            //     content: '';
            //     position: absolute;
            //     z-index: -1;
            //     width: 80%;
            //     transform: translate(-50%, -50%);
            //     top: 50%;
            //     left: 50%;
            //     border-radius: 20px;
            //     transition-duration: 300ms;
            // }
            // &:visited::before {
            //     background: blue;
            //     height: 50%;
            //     content: '';
            //     position: absolute;
            //     z-index: -1;
            //     width: 80%;
            //     transform: translate(-50%, -50%);
            //     top: 50%;
            //     left: 50%;
            //     border-radius: 20px;
            //     transition-duration: 300ms;
            // }

        }
        
    }
}
</style>