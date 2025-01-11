
let keys = {
  'Space': false,
  'Digit1': false,
  'Digit2': false,
  'Digit3': false
}

// Listen for key events
window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      keys['Space'] = true;
    }
    if (event.code === "Digit1") {
      keys['Digit1'] = true;
    }
    if (event.code === "Digit2") {
      keys['Digit2'] = true;
    }
    if (event.code === "Digit3") {
      keys['Digit3'] = true;
    }
  });
  
  window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      keys['Space'] = false;
    }
    if (event.code === "Digit1") {
      keys['Digit1'] = false;
    }
    if (event.code === "Digit2") {
      keys['Digit2'] = false;
    }
    if (event.code === "Digit3") {
      keys['Digit3'] = false;
    }
  });

