<template>
  <header id="header">
    <div class="container">
        <nav class="position-relative w-100">
            <logo width="auto" height="33px"/>
            <bell />
            <search />
            <quick-links />
        </nav>
        
    </div>
  </header>
</template>

<script>
import Bell from '@/components/a/icon/Bell.vue'
import Logo from '@/components/a/Logo.vue'
import Search from '@/components/m/Search.vue'
import QuickLinks from '@/components/m/QuickLinks.vue'
export default {
    data () {
        return {
        }
    },
    components: {
        Search,
        Logo ,
        Bell ,
        QuickLinks
    },
    mothods:{

    }

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