var image0 = document.images[0];
var image1 = document.images[1];
var image2 = document.images[2];
var image3 = document.images[3];

var downloadingImage0 = new Image();
var downloadingImage1 = new Image();
var downloadingImage2 = new Image();
var downloadingImage3 = new Image();

downloadingImage0.onload = function(){
    image0.src = this.src;   
};
downloadingImage1.onload = function(){
    image1.src = this.src;   
};
downloadingImage2.onload = function(){
    image2.src = this.src;   
};
downloadingImage3.onload = function(){
    image3.src = this.src;   
};

downloadingImage0.src = "img/svg/github.svg";
downloadingImage1.src = "img/svg/youtube.svg";
downloadingImage2.src = "img/svg/crowdin.svg";
downloadingImage3.src = "img/svg/steam.svg";