<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input minlength= "6" v-model="details.email" />
            <input v-model="details.password" />
            <button id="btn-submit" type="submit" v-on:click="submit">LOGIN</button>
        </form>
    </div>
</template>
<script>
    import { auth } from '../Views/Auth.js'
    var loginView= new Vue({
        el: '#login-view',
        data: {
            details: {               
                email: '',
                password: ''
            }
        },

        methods: {
            submit: function () {
                if (!(email == '' && password == '')) {
                    auth.authenticate(this.email, this.password);
                }
            }
        }
    })


</script>