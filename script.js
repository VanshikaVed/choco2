//https://teachablemachine.withgoogle.com/models/PvEdLfbvo/
Webcam.set({
    height:400,
    width:500,
    image_fromat:'jpg',
    jpg_quality : 90
});
console.log("ml5 Version:- " + ml5.version);
camera_div = document.getElementById("webcam");

Webcam.attach(camera_div);

function take_pic()
{
    Webcam.snap(function(img_uri)
    {
        document.getElementById("image").innerHTML = "<img src=" + img_uri + " id='picture'>";
    });
}

img_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PvEdLfbvo/' , confirm_load);

function confirm_load()
{
    console.log("Model Loaded!");
}


