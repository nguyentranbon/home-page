<template>
  <header id="header">
    <div class="container">
        <nav class="position-relative">
            <logo width="auto" height="33px"/>
            <bell />
            <search />
            <quick-links />
        </nav>
        
    </div>
  </header>
</template>

<script>
import Bell from '../../a/Bell.vue'
import Logo from '../../a/Logo.vue'
import Search from '../../m/Search.vue'
import QuickLinks from '../../m/QuickLinks.vue'
export default {
    components: {
        Search,
        Logo ,
        Bell ,
        QuickLinks
    },

}
</script>
<style lang="scss" scoped>
    header{
        height: 140px;
        background: #FDDB3A;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        .logo{
            position: absolute;
            top: 17px;
        }
        .bell{
            position: absolute;
            right: 10px;
            top: 12px;
        }

    }
</style>