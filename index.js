const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

function superbowlWin(array) {
  let winningYear = array.find((array) => array.result === "W");
  if (winningYear) {
    return winningYear.year;
  }
}
superbowlWin(record);
