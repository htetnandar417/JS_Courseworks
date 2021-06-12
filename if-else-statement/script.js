let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek == 0) {
  alert("Have a nice Sunday!");
} else if (dayOfWeek == 1) {
  alert("Happy Monday!");
} else if (dayOfWeek == 2) {
  alert("Happy Tueday!");
} else if (dayOfWeek == 3) {
  alert("Happy Wednesday!");
} else if (dayOfWeek == 4) {
  alert("Happy Thursday!");
} else if (dayOfWeek == 5) {
  alert("Have a nice weekend!");
} else {
  alert("Happy Saturday");
}
