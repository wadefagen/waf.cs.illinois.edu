var date = new Date("2021-01-26 00:00:00");
var endDate = new Date("2021-05-05");
let s;
var i = 1;

while (date < endDate) {
  s = date.toISOString().substring(0, 10);
  console.log(`# Week ${i}`);
  console.log(`- date: ${s}`);
  console.log("  title: ");
  console.log();

  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
  //date.setDate(date.getDate() + 2);

  s = date.toISOString().substring(0, 10);
  console.log(`- date: ${s}`);
  console.log("  title: ");
  console.log();

  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 5);
  //date.setDate(date.getDate() + 5);

  console.log();
  i++;

  
}


