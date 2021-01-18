<template>
    <a href="#" class="bell">
        <img 
            
            src="@/assets/images/Vector.png" 
            alt="icon bell"
        >
        <span class="count-bell">
        </span>
    </a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .count-bell{
        display: block;
        position: absolute;
        background: #FF0000;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        line-height: 10px;
        top: 3px;
        right: 0px;
    }
</style>