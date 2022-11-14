import { reactive } from 'vue'

export const player = reactive({
    playlist: [],
    index,
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        return this.playlist = songs;
    },
    setNowPlaying(song) {
        return this.now_playing = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong() {
        if (now_playing?.id == playlist?.id) {
            this.index = playlist.indexOf(nowPlaying.id);
        }
        if (index + 1 < playlist.size()) {
            return this.playlist[index + 1].song;
        } else {
            return false;
        }
    },
    getPreviousSong() {
        if (now_playing?.id == playlist?.id) {
            this.index = playlist.indexOf(nowPlaying.id);
        }
        if (index - 1 >= 0) {
            this.index = playlist.indexOf(nowPlaying.id);
            return this.playlist[index - 1].song;
        } else {
            return false;
        }
        return this.playlist[index -1].song;
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})