// // Dates
// let myDate = new Date()  // new is a constructer to create a object
// console.log(typeof(myDate));  // output ---- object

// console.log(myDate.toString()); // outpute-- day, month, date, year, time
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // output -- date
// console.log(myDate.toLocaleString());  // output -- date and time

let myCreatedDate = new Date(2024,1,23);
console.log(myCreatedDate.toLocaleString());

// let newDate = new Date("2024-01-14")  // format yy-mm-dd  or mm-dd-yy
// let newDate1 = new Date("01-14-2024")
// console.log(newDate.toDateString());
// console.log(newDate1.toDateString());

// timestamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //now use for current time
let newDates = new Date();
// console.log(newDates);
// console.log(newDates.getDay());
// console.log(newDates.getMonth() + 1);

newDates.toLocaleString("default", {
    weekday: "long"
})

console.log(newDates);









