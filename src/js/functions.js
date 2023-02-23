window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//window.onload = function(){showUniversityImages()};

var imageIndex = 0;
showUniversityImages();
function showUniversityImages() {
  var i = 0;
  var universityImages = document.getElementsByClassName("myUniversityImages");
  for (i = 0; i < universityImages.length; i++) {
    universityImages[i].style.display = "none";  
    //console.log("i" + i);
  }
  imageIndex++;
  if (imageIndex > universityImages.length) {imageIndex = 1}    
  universityImages[imageIndex-1].style.display = "block";

  setTimeout(showUniversityImages, 3250);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//window.onload = function(){showConservatoryImages()};

var imageIndex2 = 0;
showConservatoryImages();
function showConservatoryImages() {
  var j = 0;
  var convervatoryImages = document.getElementsByClassName("myConservatoryImages");
  for (j = 0; j < convervatoryImages.length; j++) {
    convervatoryImages[j].style.display = "none";
    //console.log("j" + j);
  }
  imageIndex2++;
  if (imageIndex2 > convervatoryImages.length) {imageIndex2 = 1} 
  convervatoryImages[imageIndex2-1].style.display = "block";  
  setTimeout(showConservatoryImages, 2750);
}