<template>
  <transition >
      <div
        class="slider-slide">
          <slot />
      </div>
  </transition>
</template>

<script>
export default {
    name: `SliderSlide`,
    data(){
        return{
        }
    },
    // methods: {
    //     hide(direction){
    //         this.transition = `slider-slide__transition-${direction}`;
    //         this.active = false;
    //     },
    //     show(direction){
    //         this.transition = `slider-slide__transition-${direction}`;
    //         this.active = true;
    //     }
    // }
}
</script>

<style lang="scss">

</style>