<template>
<div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" :class="{active:isGrid}" onclick="isGrid=true">
                <IconGrid/>
              
            </button>
            <button :class="{active:!isGrid}" @click="isGrid=false" id="btn-list">
                <IconList/>
            </button>
        </div>
    </div>
    <ul :class="grid:isGrid" id="list-albums">
        <li @click="selectAlbum(index)" v-for="(alb,index) in albums":class="{active:alb.id==currentAlbumId}" :class="album">
            <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
            <div class="album-info">
                <h4 id="txt-album-name">We May Grow Old But We Never Grow Up</h4>
                <p id="txt-album-artists">Example</p>
                <div class="album-year">
                    <p id="txt-album-year">2022</p>
                    <p id="txt-album-tracks">2</p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>
<script>

    import IconGrid from './icons/IconGrid.vue'
    import IconList from './icons/IconList.vue'
    import { player } from './stores/player.js'
  
    export default {
        data() {
            return {
                isGrid: false,
                currentAlbumId=player.getNowPlayingAlbumID(),
              
            }
        },
            methods: {
                changeStatus(){
                    return isGrid = !isGrid;
                },
                selectAlbum(index) {
                }

        },
        computed: {
            albums,
        }
    }
    
   
</script>