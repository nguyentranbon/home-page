<template>
  <div class="overlay fixed w-100" v-if="isVisible" />
</template>

<script>
import Overlay from '@/maketplace/SellerAccount/Overlay.js'

export default {
  mixins: [Overlay],
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    height: 100%;
    background:rgba(0, 0, 0, 0.4);
  }
</style>
