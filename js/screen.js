function Controller() {

  //screen: the screen where the lyrics are displayed
  //songs: the list of songs to be displayed
  //currentSong: the current song
  //slideOrder: array of the order the slides in the song traverse
  var screen = document.getElementById('screen');
  var songs = document.getElementById('songs');
  var currentSong;
  var currentSlide;
  var slideOrder;

  //return the slide order of the passed song
  function getSlideOrder(song) {

  }

  //switch to the next song
  function NextSong () {
    if (currentSong === undefined) {
      currentSong = songs.firstElementChild;
    } else {
      currentSong = currentSong.nextElementSibling;
    }

    slideOrder = getSlideOrder(currentSong);
  }

  //go to a specific slide
  function toSlide (slide) {

  }

  //go to a specific song, specified by "song", the ID of the div
  function goTo(song, slide) {
    if (song === undefined && slide === undefined) {
      currentSong = songs.firstElementChild;
      slideOrder = currentSong.querySelector(".slideorder").innerHTML.split("");
    }
    currentSong = song === undefined ? songs.firstElementChild : songs.querySelector("." + song);
    slideOrder = song.querySelector(".slideorder").innerHTML.split("");
    currentSlide = slide === undefined ? 1 : slide;
  }

  //switch to the next slide
  function Next() {

  }

  //controller object to be returned
  var controller = {
    blanksBetween : true,

    //initialize the controller
    start: function () {
      current = songs.firstElementChild;
      slideOrder = getSlideOrder(current);
    },
    //go to the next slide
    nextSong: function () {

    },
    //go to a specific song
    goTo: function () {

    }
  };
}
