<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input v-model="search" id="input-search" placeholder="Search by title..." />
            </div>
            <div class="wrapper-settings">
                <button v-on:click="changeState" :class="{active:show_favorites}" id="btn-show-favorites">Show Favorites</button>
            </div>
        </div>
        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id">#</th>
                    <th v-on:click="sortingBy;updateSortOption(0)" :class="{active:sortOption==0}" id="th-title">
                        Title
                        <IconCaretUp v-if="sortOption==0" />
                    </th>
                    <th id="th-artist">Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration":class="{active:sortOption==1}" v-on:click="updateSortOption(1);sortBy()">
                        Duration
                        <IconCaretUp v-if="sortOption==1" />
                    </th>
                </tr>
                <!-- Loop goes on this <tr> element -->
                <tr v-for="(song, index) songs" class="song" @click="oneClick($event);currentIndex=index;selectSong">
                    <td id="td-index">
                        <IconPlay v-if="currentIndex=index" />
                        <span id="txt-index">{{currentIndex}}</span>
                    </td>
                    <td id="td-title">
                        <img src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        {{song.title}}
                    </td>
                    <td id="td-artist ">{{artists}}</td>
                    <td id="td-album">{{song.album}}</td>
                    <td id="td-duration">
                        {{song.duration}}
                        <IconHeart v-for="sing in fav_songs" v-if="sing.id==currentPlayId" @click="addordelete(sing.id)"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import {player} from './stores/player.js';
    import { auth } from './views/Auth.js';  
  
    var pain = new vue({
        el: '#td-artist',
        data: {
            artists,

        },
        methods: {
            changeArtists(object) {
                 return artists = object.toString();
            }
        }

    });
    export default {
        data() {
            return {
                search: '',
                sortBy: 'title',
                sortDirection: 'ASC',
                sortOption:0;
                fav_songs:auth.getFavoriteSongs(),
                currentIndex: 0,
                 currentPlayId: player.getNowPlayingSongId(),
                currentName: player.getNowPlayingSongName(),
                currentAlbum: player.getNowPlayingAlbumID(),
                currentArtist: player.getNowPlayingArtists(),
                currentDuration: player.getNowPlayingSongDuration(),
                clickCount: 0,
                clickTimer: null,
              
            };

        },
        computed: {
            filtered_songs() {
              
            }
        },

        methods: {
            handleScroll(event) {
                this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
            },
            sortingBy(by) {
                if (by == this.sortBy) {
                    if (this.sortDirection == 'ASC') {
                        this.sortDirection = 'DESC';
                    } else {
                        this.sortDirection = 'ASC';
                    }
                } else {
                    this.sortDirection = 'ASC';
                    this.sortBy = by;
                }
                switch (this.sortBy) {
                    case 'title':
                        this.sortCompaniesByName();
                        break;
                    case 'duration':
                        this.sortCompaniesByCafes();
                        break;
                    case 'album':
                        this.sortCompaniesByPendingActions();
                        break;
                    case 'artist':
                        this.sortCompaniesByPendingActions();
                        break;
                }
            },
            changeState() {
                this.show_favorites = !this.show_favorites;
            },
            addordelete(id) {
                auth.toggleFavorite(id);
            },
            selectSong(song) {
                this.clickCount++;
                if (this.clickCount== 1) {
                    this.timer = setTimeout(() => {
                        this.clickCount = 0;
                    }, 300);
                   
                }
                if (this.clickCount == 2) {
                    this.clickCount = 0;
                    song.play();
                }
 
            },
            updateSortOption(number) {
                this.sortOption = number;
            }
    }


</script>