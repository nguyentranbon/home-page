<template>
  <router-link to="/" class="logo">
    <img
        :width="width"
        :height="height"
        src="@/assets/logomarket.png"
        alt="Logo"
    >
  </router-link>
</template>

<script>
export default {
    props: {
        width:{
            type: [String, Number],
            required: true,
        },
        height:{
            type: [String, Number],
            required: true,
        }
    }
}
</script>

<style>

</style>