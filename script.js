const elevator = document.getElementById("currentFloor");
const secondFloor = document.getElementById("second-floor");
const firstFloor = document.getElementById("first-floor");
const groundFloor = document.getElementById("ground-floor");
const screen = document.getElementById("screen");

let currentFloor = 1;

function goToFloor(floor) {
  console.log("Going to floor " + floor);
  // Diff between current floor and floor
  let floorDifference = Math.abs(currentFloor - floor);
  elevator.style.transitionDuration = floorDifference === 1 ? "5s" : "10s";
  currentFloor = floor;
  screen.innerHTML = currentFloor;
  elevator.style.transform = `translateY(-${(currentFloor - 1) * 247}px)`;
}

firstFloor.addEventListener("click", () => goToFloor(2));
secondFloor.addEventListener("click", () => goToFloor(3));
groundFloor.addEventListener("click", () => goToFloor(1));
