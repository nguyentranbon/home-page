<template>
    <div class="quick-links">
        <router-link to="/marketplace">
            <span>Marketplace</span>
        </router-link>
        <router-link to="/community">
            <span>Community</span>
        </router-link>
        <router-link to="/auction">
            <span>Auction</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .quick-links{
        position: absolute;
        top: 105px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        width: 100%;
        text-align: center;
        a{
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            line-height: 20px;
            padding: 5px 0px 4px 0px;
            &:hover,
            &.router-link-exact-active{
                color: #FFFFFF;
                background: #FFA800;
                font-weight: bold;
                transform: .3s;
            }
        }

    }

</style>