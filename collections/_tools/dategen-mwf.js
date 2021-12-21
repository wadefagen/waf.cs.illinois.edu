
var date = new Date("2022-01-17");
var endDate = new Date("2022-05-04");
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


