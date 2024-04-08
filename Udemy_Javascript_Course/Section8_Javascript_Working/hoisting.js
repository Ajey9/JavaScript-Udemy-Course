if (!waiting) {
  console.log("He went");
} else {
  tell();
}

var waiting = true;

function tell() {
  console.log("What are you doing?");
}
