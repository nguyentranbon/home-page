<template>
  <transition >
      <div
        v-show="active"
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
            active: false,
            transtion: ``,
        }
    },
    methods: {
        hide(direction){
            this.transition = `slider-slide__transition-${direction}`;
            this.active = false;
        },
        show(direction){
            this.transition = `slider-slide__transition-${direction}`;
            this.active = true;
        }
    }
}
</script>

<style lang="scss">

</style>