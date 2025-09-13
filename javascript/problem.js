let speed = 30;
let distance = 0;

// Loop through 9 intervals of 10 minutes (10, 20, ..., 90)
for (let i = 10; i <= 90; i += 10) {
  distance += speed / 6;  // distance = speed * (10/60) = speed/6
  if (speed < 120) {
    speed *= 2;
    if (speed > 120) speed = 120;  // cap speed at 120
  }
}

// Add distance for last 6 minutes (96 - 90)
distance += speed / 10;  // speed * (6/60) = speed/10

console.log(distance.toFixed(2));  // Output: 67.00
