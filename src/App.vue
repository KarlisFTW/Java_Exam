<template>
    <div v-if="display">
        <HeaderComponent ></HeaderComponent>

        <div id="section-body">
            <NavigationComponent></NavigationComponent>
            <router-view class="section-router"></router-view>
        </div>
        <div id="section-player">
            <AudioPlayer />
        </div>
    </div>
    <div v-else>
        <Login>

        </Login>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                display:localStorage.is_authenticated,
            }
        }

    }

</script>