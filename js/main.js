var myElement = document.querySelector("body");

var bodPull = new Hammer(myElement);

bodPull.on("tap press", function(ev) {
    console.log("Gesture detected");
});