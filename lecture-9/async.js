/*settimeout(function () {
  return function getdata() {

  };
},0);

settimeout(function () {
  return function setdata() {

  }
},0);
*/
function imageProcessing() {

  imageDetection(function (img,enhancement) {
    console.log("Image Cleaning Started");
    console.log("Image Dectected"+ img);
    enhancement(img+"enhanced")
  });
  console.log("Image Processing Started");
}

function imageDetection(imgCleaning) {

  setTimeout(function () {
    console.log("Image Detection Started");
    let detected_image="   image 1";
   imgCleaning(detected_image,function (enhanced_image) {
     console.log("Enhancing Image");
     setTimeout(function () {
       console.log("Algorithm for Enhancing Image"+ enhanced_image);
     },0);
     console.log("Enhanced Image processing still going on..");
    })
  },0);
}
imageProcessing();
