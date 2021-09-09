
var date = new Date("2021-08-23");
var endDate = new Date("2021-12-09");
let s;
var i = 1;

while (date < endDate) {



  s = date.toISOString().substring(0, 10);
  console.log(`# Week ${i}`);
  console.log(`- date: ${s}`);
  console.log("  title: ");
  console.log();

  date.setDate(date.getDate() + 2);
  s = date.toISOString().substring(0, 10);
  console.log(`- date: ${s}`);
  console.log("  title: ");
  console.log();

  date.setDate(date.getDate() + 2);
  s = date.toISOString().substring(0, 10);
  console.log(`- date: ${s}`);
  console.log("  title: ");
  console.log();


  date.setDate(date.getDate() + 3);

  console.log();
  i++;

  
}


