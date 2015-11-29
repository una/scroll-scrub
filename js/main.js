var myElement = document.querySelector("html");

var bodPull = new Hammer(myElement);

bodPull.add(new Hammer.Press({
  event: 'press',
  pointer: 1,
  threshold: 50000,
  time: 100
}));

bodPull.on('press', function(event) {
  console.log("press detected", event.deltaY, event.distance, event.velocity);
});