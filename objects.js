var playlist = {
  metallica: "enter sandman",
  basementJaxx: "yo",
  sunsetRubdown: "stadiums and shrines",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

