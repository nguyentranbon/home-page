<template>
    <div id="default-home">
        <overlay v-if="overlayActive" />
        <div class="view-port">
            <header-main />
            <slot />
            <footer-main />

            <sign-up />
  
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderMain from '../components/o/Header/Header'
import FooterMain from '@/components/o/Footer/Footer'
import SignUp from '@/components/o/Auth/SignUp.vue'
import Overlay from '@/components/a/block/Overlay.vue'
// import SellerSignUp from '@/components/o/Auth/SellerSignUp.vue'
export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapState({ 
            overlayActive: state => state.overlay,
        })
    },
    components: {
        HeaderMain,
        FooterMain,
        SignUp,
        Overlay,
        // SellerSignUp,
    }
}
</script>

