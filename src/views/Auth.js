import { reactive } from 'vue'

// TE DEFINÇT USER OBJEKTU
 
export const auth = reactive({
 user = {
    name: "Kârlis",
    surname: "Griìis",
    code: "IT19020",
    favorite_songs: localStorage.favorite_songs ?? null
},
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.user.name = name;
        this.user.surname = surname;
        this.user.code = code;

    },

    authenticate(email, password) {
        if (email == "karlis.grigis@va.lv" && password == "123456") {
            localStorage.is_authenticated = true;
            is_authenticated = true;
            router.push("/");
        }
    },

    logout() {
        localStorage.clear();
        localStorage.is_authenticated = false;
        router.push("/login");
    },

    toggleFavorite(songID) {
        if (user.favorite_songs.includes(songID)) {
            user.favorite_songs.splice(user.favorite_songs.indexOf(songId), 1);
        } else {
            user.favorite_songs.push(songID);
        }
        localStorage.favorite_songs = user.favorite_songs;
    },

    getFavoriteSongs() {
        return user.favorite_songs;
    }


})
