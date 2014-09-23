function Screen() {
  //screen: the screen where the lyrics are displayed
  //songs: the list of songs to be displayed
  //currentSong: the current song
  //slideOrder: array of the order the slides in the song traverse
  var screen = document.getElementById('screen');
  var songs = document.getElementById('songs');
  var currentSong;
  var currentSlide;
  var slideOrder;

  function updateSlideOrder () {
   slideOrder = currentSong.querySelector(".slideorder").textContent.split("");
  }

  function transition () {
   screen.innerHTML = currentSong.querySelector("[class='" + slideOrder[currentSlide - 1] + "']").innerHTML;
  }

  //controller object to be returned
  var screenController = {
   //initialize the controller
   start: function () {
    currentSong = songs.firstElementChild;
    updateSlideOrder();
    currentSlide = 1;
    transition();
   },
   status: function() {
    console.log("screens:" + screens.getAttribute("id"));
    console.log("songs:" + songs.getAttribute("id"));
    console.log("currentSong:" + currentSong.getAttribute("id"));
    console.log("slideOrder:" + slideOrder.toString());
    console.log("currentSlide:" + currentSlide);
   },
   //go to the next Song
   nextSong : function () {
    if (currentSong === undefined) {
     currentSong = songs.firstElementChild;
    } else {
     var tempSong = currentSong.nextElementSibling;
     if (tempSong !== null) {
      currentSong = tempSong;
     }
    }

    updateSlideOrder();
    currentSlide = 1;

    //transition animation
    transition();
   },
   /* go to the next slide in the slide order
      if the slide is at the end
       do nothing
      if there is no currentSlide
       set the currentSlide to the first one
   */
   next : function() {
    if (currentSlide === undefined) {
     currentSlide = 1;
    } else {
     if (currentSlide < slideOrder.length - 1) {
      currentSlide++;
     }
    }

    //transition animation
    transition();
   },
   prev : function() {
    if (currentSlide === undefined) {
     currentSlide = 1;
    } else {
     if (currentSlide !== 1) {
      currentSlide--;
     }
    }

    //transition animation
    transition();
   },
   /* go to a song and/or a slide
     if @song is undefined
      go to the first slide of the first song
     else
      go to the song based on the song ID defined by @song
     if @slide is a number
      go to the index in the slideOrder array
     else
      loop to find the next slide in slideOrder that matches @slide
       if no slide matches, stay on the current slide
   */
   goTo : function (song, slide) {
    //go to song
    if (song !== undefined) {
     currentSong = songs.querySelector("." + song);
     updateSlideOrder();
    } else if (currentSong === undefined) {
     currentSong = songs.firstElementChild;
     updateSlideOrder();
    }
    currentSlide = 1;

    //go to slide
    if (slide !== undefined) {
     if(Number.isInteger(slide)) {
      currentSlide = slide;
     } else {
      var tempSlide = currentSlide;
      while ((tempSlide !== undefined)) {
       if (slideOrder[tempSlide] === slide) {
        currentSlide = tempSlide;
       }
      }
     }
    }

    //transition animation
    transition();
   }
  };

  return screenController;
}
