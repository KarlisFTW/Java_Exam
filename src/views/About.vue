<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <button id="btn-edit" :class="active:is_active" @click="is_active=!is_active;toggleText">{{text}}</button>
                <div v-if="is_active">
                    <button @click="changeUserDetails" id="btn-save">Save Form</button>
                </div>
                
            </div>
        </div>
      
            <form>
               
                    <div class="wrapper-input">
                        <label>NAME</label>
                        <div v-if="is_active">
                            <input v-model="name" id="input-name" />
                        </div>
                      
                        <p id="txt-name">{{name}}</p>
                    </div>
                    <div class="wrapper-input">
                        <label>SURNAME</label>
                        <div v-if="is_active">
                        <input v-model="surname"id="input-surname" />
                        </div>
                        <p id="txt-surname">{{surname}}</p>
                    </div>
                    <div class="wrapper-input">
                        <label>STUDENT CODE</label>

                        <div v-if="is_active">
                            <input v-model="code" id="input-code" />
                        </div>
                            <p id="txt-code">{{code}}</p>
                       
                    </div>
                    <div class="wrapper-songs">
                        <label>FAVORITE SONGS</label>
                        <ul v-if="!favorite_songs.length==0">
                            <li v-for="fongs in favorite_songs">
                                <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                                <div class="song-info">
                                    <p id="txt-song" class="song-name">{{fongs.name}}</p>
                                    <p id="txt-artist" class="song-artists">{{fongs.artist}}</p>
                                </div>
                            </li>
                        </ul>
                        <div id="txt-empty" class="empty">NO SONGS FOUND</div>
                    </div>
            </form>
       
       
    </div>


</template>
<script>
    import {auth} from '../views/Auth.js'
    export default {
        data() {
            return {
                is_active: true,
                name: auth.user.name,
                surname: auth.user.surname,
                code: auth.user.code,
                text: "Edit Form",
                favorite_songs: auth.getFavoriteSongs(),
            }
            
        },
        methods: {
           
            changeUserDetails(name,surname,code) {
                this.auth.user.name = name;
                this.auth.user.surname = surname;
                this.auth.user.code = code;
                this.is_active = false;
            },
            toggleText() {
                if (this.is_active) {
                    this.text = "Edit Text";
                } else {
                    this.text = "Cancel";
                }

            },
            
    }
       
    }

</script>