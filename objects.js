var playlist = {artist: "song"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(object, value) {
  delete object.value
}