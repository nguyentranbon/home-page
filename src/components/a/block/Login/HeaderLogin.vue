<template>
    <header class="mk-header-login w-100">
        <div class="image-wrap">
            <!-- <img src="@/assets/images/undraw_video_game.png" alt="undaw-video-game"> -->
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderLogin'
}
</script>

<style lang="scss">
.mk-header-login{
    height: 132px;
    background: rgba(253, 219, 58, 0.68);
    position: relative;
    z-index: 1;

    .image-wrap{
        position: absolute;
    }
}
</style>