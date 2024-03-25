// script.js

// Ask permission to access the device's media
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    console.log('Permission granted!');
  })
  .catch(function(err) {
    console.error('Permission denied:', err);
  });

const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const showListButton = document.getElementById('showListButton');
const listContainer = document.getElementById('listContainer');

// Add event listeners for play/pause, previous, and next buttons
playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);
showListButton.addEventListener('click', toggleSongList);

// Sample song list (replace with your actual songs)
const songs = [
  { name: 'Song 1', src: 'song1.mp3' },
  { name: 'Song 2', src: 'song2.mp3' },
  { name: 'Song 3', src: 'song3.mp3' }
];

// Function to toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
  }
}

// Function to play the previous song
function playPrevious() {
  // Implement logic to play the previous song
  console.log('Playing previous song');
}

// Function to play the next song
function playNext() {
  // Implement logic to play the next song
  console.log('Playing next song');
}

// Function to toggle visibility of the song list
function toggleSongList() {
  if (listContainer.style.display === 'none') {
    listContainer.style.display = 'block';
    songList.style.display = 'none';
  } else {
    listContainer.style.display = 'none';
    songList.style.display = 'block';
  }
}

// Populate the song list
songs.forEach(song => {
  const listItem = document.createElement('li');
  listItem.textContent = song.name;
  listItem.addEventListener('click', function() {
    audioPlayer.src = song.src;
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
  });
  listContainer.appendChild(listItem);
});
playPauseButton.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
  } else {
    audioPlayer.pause();
    playPauseButton.innerHTML = "<i class='bx bx-play-circle'>";
  }
}
function playSong(event) {
  if (event.target.tagName === 'LI') {
    const songName = event.target.textContent;
    // Set the song source here using songName
    // For example:
    // audioPlayer.src = "path/to/your/songs/" + songName + ".mp3";
    audioPlayer.play();
    playPauseButton.innerHTML = "<i class='bx bx-play-circle'>"
    listContainer.style.display = 'none';
    songList.style.display = 'block';
  }
}

// script.js

const audioInput = document.getElementById('audioInput');

audioInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  audioPlayer.src = url;
  audioPlayer.play();
  playSelectedFile(file)
});
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const fileUrl = urlParams.get('file');
  if (fileUrl) {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'selectedAudioFile');
        playSelectedFile(file);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  }
};