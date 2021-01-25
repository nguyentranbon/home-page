<template>
    <div class="slider-list">
        <slot/>
    </div>
</template>

<script>
export default {
    name: `slider-list`,
}
</script>

<style lang="scss">
.slider-list {
  position: relative;
}
</style>