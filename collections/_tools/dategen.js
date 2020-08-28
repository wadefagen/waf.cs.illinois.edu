var date = new Date("2020-08-25");
var endDate = new Date("2020-12-10");
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
  date.setDate(date.getDate() + 5);

  console.log();
  i++;

  
}


