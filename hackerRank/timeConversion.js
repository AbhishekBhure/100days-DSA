function timeConversion(s) {
  // Write your code here

  //   const [time, period] = s.split(" "); //this will work only if there a space after the time
  let [hour, minutes, ...rest] = s.split(":");
  let seconds = rest.toString().slice(0, 2);
  let period = rest.toString().slice(2);

  hour = parseInt(hour);
  minutes = parseInt(minutes);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString()} `;
}

console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion("07:05:45 PM"));
