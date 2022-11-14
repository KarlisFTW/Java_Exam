<template>
    <div id="main-header" class="active">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg"/>
            <h2>KRAKEN.FM</h2>
        </div>
        <div class="wrapper-profile">
            <div class="section-user">
                <span class="avatar"></span>
                <h3 id="txt-full-name">{{name}} {{surname}}</h3>
            </div>
            <button onclick="logout()" id="btn-logout">LOGOUT</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "main-header",
        data() {
            return {
                name,
                surname
            }
        }

    }
    import Auth from "@/views/Auth.js"
    var name = Auth.name, surname = Auth.surname;
    function logout() {
        Auth.logout();
    }
</script>
