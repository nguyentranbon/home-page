<template>
    <div id="home">
        <!-- <banner-slider :slides='imageSlides' /> -->
        <login />
    </div>
</template>

<script>
// import BannerSlider from '../components/templates/Slider.vue'
import Login from '@/components/o/Auth/SignUp'

export default {
    name: "ImagesSlider",
    data(){
        return{
            imageSlides: [
                {
                    id: 1,
                    headline: 'Lorem 0',
                    image: require('@/assets/images/Rectangle.png'),
                },
                {
                    id: 2,
                    headline: 'Lorem 1',
                    image: require('@/assets/images/Rectangle-2.png'),
                },
            ],
        }
    },
    components:{
        Login
    },
    // mounted() {

    //   this.$emit("modal-show", "modal-signup");
    // },
}
</script>

<style>

</style>