setTimeout(() => {
  document.getElementById("volume").setAttribute("class", "hidden");
}, 1000);

var again = true;

const settings = {
  numConfetti: 250,
  distance: 200,
  colors: ["blue", "green", "yellow", "red", "pink"],
  shapes: [
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "square",
    "circle",
    "rectangle",
    "felicidades"
  ]
};

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRotation() {
  return Math.floor(Math.random() * 360) + 1;
}
// var simon = document.getElementById("flier");
var audio = document.getElementById("myAudio");
audio.currentTime = 9;

function emit() {
  if (again) {
    again = false;
    var simon = document.createElement("div");
    simon.setAttribute("class", "flier");
    var img = document.createElement("img");
    img.setAttribute("src", "calvo.jpg");
    simon.appendChild(img);
    document.getElementById("body").append(simon);
    // simon.style.display = "block";
    audio.play();
    var container = document.getElementById("confetti-container");
    var containerRect = container.getBoundingClientRect();
    var containerData = {
      x: containerRect.left,
      y: containerRect.top,
      height: containerRect.right - containerRect.left,
      width: containerRect.bottom - containerRect.top
    };

    var start = {
      x: containerData.x + containerData.width / 2,
      y: containerData.y + containerData.height / 2
    };

    var maxY = containerData.y + containerData.height + settings.distance;
    var minY = containerData.y - settings.distance;

    var maxX = containerData.x + containerData.width + settings.distance + 280;
    var minX = containerData.x - settings.distance - 280;

    var docFrag = document.createDocumentFragment();

    for (var i = 0; i < settings.numConfetti; i++) {
      let confetti = document.createElement("div");
      let color = getRandomArrayItem(settings.colors);
      let shape = getRandomArrayItem(settings.shapes);
      let size = getRandomInt(8, 4);
      let newX = getRandomInt(minX, maxX);
      let newY = getRandomInt(minY, maxY);
      confetti.className += "confetti " + color + " " + shape;
      confetti.style.top = start.y + "px";
      confetti.style.left = start.x + "px";
      confetti.style.height = size + "px";
      confetti.style.width = size + "px";
      confetti.style.transform = "rotate(" + getRotation() + "deg)";
      docFrag.appendChild(confetti);

      setTimeout(function() {
        confetti.style.transition =
          "all " + getRandomFloat(1.5, 0.5) + "s ease";
        confetti.style.top = newY + "px";
        confetti.style.left = newX + "px";
        confetti.style.transform = "rotate(" + getRotation() + "deg)";

        confetti.addEventListener("transitionend", function() {
          confetti.style.transition =
            "all " + getRandomFloat(1.25, 1) + " ease";
          confetti.style.opacity = 0;
          confetti.style.transform = "rotate(" + getRotation() + "deg)";
          confetti.style.top = parseInt(confetti.style.top) + 10 + "px";
          setTimeout(function() {
            // console.log(confetti);
            confetti.remove();
            // confetti = null;
            var divs = document.getElementsByClassName("confetti");
            if (divs.length === 0) again = true;
          }, 500);
        });
      }, 1);
    }
    document.body.appendChild(docFrag);
  }
}
