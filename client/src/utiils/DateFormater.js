import moment from "moment-timezone";

const dateFormatter = (date) => {
  //   alert(date);
  //here we were subtracting our date from current time which will be in milliseconds
  const dateDifferenceInTime = new Date().getTime() - new Date(date).getTime();

  // conerting milli seconds to days
  // (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours)
  const dateDifferenceInDays = dateDifferenceInTime / (1000 * 60 * 60 * 24);

  //After returning in particular formats as of our convinent
  if (dateDifferenceInDays < 1) {
    return moment(date).format("LT"); // 10:04 am
  } else if (dateDifferenceInDays < 2) {
    return `Yesterday. ${moment(date).format("LT")}`; // just YesterDay
  } else if (dateDifferenceInDays <= 7) {
    return moment(date).format("dddd"); //like monday , tuesday , wednesday ....
  } else {
    return moment(date).format("l"); // if it was more than a week before it will returns as like 05/23/2022
  }
};

export { dateFormatter };
