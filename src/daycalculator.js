export const calculate = function (dateInput) {
  const date1 = new Date(dateInput);
  const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayOfWeek = date1.getDay();
  return dayArr[dayOfWeek]
}
console.log(calculate)
