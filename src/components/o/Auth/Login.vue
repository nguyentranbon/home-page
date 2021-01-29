<template>
    <div id="mk__next">
        <div class="login-main">
            <div class="form-inner">
                <div class="banner">
                    <button>
                        <icon-previous />
                    </button>
                    <img src="#" alt="#">
                </div>
                <div class="logo-heading">
                    <img src="" alt="">
                    <div class="heading"><h2>Login</h2></div>
                </div>
                <form class="login">
                    <div class="login-form">
                        <div class="mk-input mk-input_login-name"></div>
                        <div class="mk-input mk-input_password"></div>
                        <div class="login-forgot">Forgot Password</div>
                    </div>
                    <div class="login-btn">
                        <div class="social-heading">
                            <span>Hoặc tiếp tục bằng</span>
                        </div>
                        <button class="mk-bottom"></button>
                    </div>
                </form>
                <div class="login-social">
                    <p class="note">Bằng việc tiếp tục, bạn đã chấp nhận<a href="#">điều khoản sử dụng</a></p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import IconPrevious from '@/components/a/icon/IconPrevious';
export default {
    data(){
        
    },
    components: {
        IconPrevious,
    }
}
</script>

<style>

</style>