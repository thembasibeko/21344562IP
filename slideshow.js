// JavaScript source code
var myImage = document.images("myphoto");
var imageArray = ["back.jpg", "images44.jpg", "images7.jpg", "download2.jpg"];
var imageIndex = 0;

function changeImage() {
    myphoto.setAttribute("src", imageArray(imageIndex));
    imageIndex ++; 
    if(imageIndex>=imageArray.length){
        imageIndex=0;
    }
}
var intervalHandle = setInterval(changeImage,1000);
myphoto.onclick=function(){
    clearInterval(intervalHandle);   
}