var playlist = {
  metallica: "enter sandman",
  basementJaxx: "yo",
  sunsetRubdown: "stadiums and shrines",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.songTitle;
  return playlist;
}

