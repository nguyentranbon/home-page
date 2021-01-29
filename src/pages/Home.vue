<template>
    <div id="home">
        <!-- <banner-slider :slides='imageSlides' /> -->
    </div>
</template>

<script>
// import BannerSlider from '../components/templates/Slider.vue'


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
    mounted() {

      this.EventBus.$emit("modal-show", "modal-signup");
    },
}
</script>

<style>

</style>