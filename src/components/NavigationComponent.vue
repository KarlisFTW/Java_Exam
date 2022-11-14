<template>
    <nav id="nav-main" class="wrapper-navigation">
        <ol>
            <li>
                <router-link to="/">SONGS</router-link>
            </li>
            <li>
                <router-link to="/albums">ALBUMS</router-link>
            </li>
            <li>
                <router-link to="/about">ABOUT</router-link>
            </li>
        </ol>
    </nav>
</template>
<script>

    const Songs = { template: '<div>Songs</div' };
    const Albums = { template: '<div>Albums</div' };
    const About = { template: '<div>About</div' };
    const routes = [
        { path: '/', component: Songs },
        { path: '/albums', component: Albums },
        { path: '/about', component: About }
    ];
    const obj_songs = {
        path: "/",
        name: "Songs"
    };
    const obj_albums = {
        path: "/albums",
        name: "Albums"
    };
    
    const obj_about = {
        path: "/about",
        name: "About"
    };

    const routerArray = [obj_songs, obj_albums, obj_about];
    const router = VueRouter.createRouter({
        // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
        history: VueRouter.createWebHashHistory(),
        routes, // short for `routes: routes`
    })

    // 5. Create and mount the root instance.
    const app = Vue.createApp({})
    // Make sure to _use_ the router instance to make the
    // whole app router-aware.
    app.use(router)

    app.mount('#app')
</script>