<template>
    <div id="default-home">
        <div class="view-port">
            <header-main />
            <slot />
            <sign-up />
            <footer-main />


  
            
        </div>
    </div>
</template>

<script>
import HeaderMain from '../components/o/Header/Header'
import FooterMain from '@/components/o/Footer/Footer'
import SignUp from '@/components/o/Auth/SignUp.vue'
export default {
    data(){
        return{

        }
    },
    components: {
        HeaderMain,
        FooterMain,
        SignUp
    }
}
</script>

