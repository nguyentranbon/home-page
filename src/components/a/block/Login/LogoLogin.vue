<template>
    <img 
        src="@/assets/images/undraw_video_game.png" 
        alt="undraw-video-game"
        :width="width"
        :height="height"
    >
</template>

<script>
export default {
    name="LogoLogin",
    props:{
        width:{
            type: [String, Number],
            required: true
        },
        height:{
            type: [String, Number],
            required: true
        }
    }
}
</script>

<style>

</style>