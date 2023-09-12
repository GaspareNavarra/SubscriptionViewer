<template>
    <div class="col-sm-4"></div>
    <div class="col-sm-4" style="text-align: center; color: #eeeeee;"><h1>SubscriptionViewer</h1></div>
    <div id="userLogin" class="row col-sm-4 d-flex justify-content-end">
        <button class="row user" @click="goToLogin()">
            <span class="col-sm-6 login-button">Login</span>
            <img :src="User" class="user_icon_size col-sm-5">
        </button>
    </div>
</template>
<script>
import User from '../../../public/img/user_icon.png';
export default {
    data() {
        return {
            User: User
        }
    },
    inject: ['goToLogin']
}
</script>