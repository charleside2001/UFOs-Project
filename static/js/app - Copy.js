// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(4, 5) * 2;
  return total;
}