<template>
    <div id="HomePage" class="back homepage-size row no-margin">
        <span class="welcome_msg">
            Welcome
            <br>
            <span style="text-decoration: underline;" @click="goToLogin()">Log-in</span> now to start viewing your subscriptions
            <br> or <br>
            Click <span style="text-decoration: underline;">here</span> to sign up
        </span>
    </div>
</template>
<script>
export default {
    inject: ['goToLogin']
}
</script>