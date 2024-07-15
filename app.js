/////////////////////////   lec1   ////////////////////////////
// node js

// js     jsEngin   V8

// jsEngin + c++  => node.js

//////////////////////////////////////////////////////////////////////////////

//    عشان ارن الكود            node app         node+اسم الفايل

/////////////////////////////////////////////////////////////////////////////

/////////////////////// 1- core modules
/*

////// File system

const fs = require("fs");

fs.writeFileSync("data1.txt", "otaka"); // اسم الفايل و الداتا // بيعمل فولدر و يحط في داتا
//
console.log(fs.readFileSync("data1.txt")); //  BUffer   dataTybe  // اسم الفايل // لو عاوز اقراء فايل
console.log(fs.readFileSync("data1.txt").toString()); //  BUffer ==> string     dataTybe
//
fs.appendFileSync("data1.txt", "yahia ahmed"); // اسم الفايل  و الداتا الي عاوز اضفها // لو عاوز اضيف بيانات علي الفايل
// لو الفايل مش موجود بيكريت واحد جديد

/////////////////////////////////////////////////

// فايل  خارجي

const x = require("./AllData");

console.log(x.lName);

*/

////////////////////// 2-NPM  node package manager
// 1-  npm init -y
// 2-  npm i validator
// 3-  var validator = require('validator')

// const validator = require("validator");

// console.log(validator.isEmail("otaka@gmail.com"));

//////////////////////////////          lec 2 //////////////////////////////////////

// object =>   json

//     process.argv   [0 ,1 ]  [url for node instaled , url for app  ]    ======

// console.log(process.argv); //
// console.log(Process.argv[2]); // تاخد القيمه الي بكتبها ف الترمينال

/////////////////////// اخد الامل من التيرمينال و اعمل علي عمليه معين ه
/////   من الترمينال عشان اخد  kye : value     =>    --key="value"

// const x = process.argv[2];

// if (x === "add") {
//   console.log("you add item");
// } else if (x === "deleat") {
//   console.log("you deleat item");
// } else {
//   console.log("Erorr");
// }

//////////////////yargs

// const yargs = require("yargs");

// console.log(yargs.argv); //====

////////////////////////////////// عشان اعمل الاوامر بال yargs

// yargs.command({
//   command: "add",
//   describe: " to add an item",
//   builder: {
//     fname: {
//       describe: "this is the first name desc in add command",
//       demandOption: true,
//       type: "string",
//     },
//     lname: {
//       describe: "this is the last name desc in add command",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: () => {
//     console.log("you have already added an item");
//   },
// });

// // console.log(yargs.argv)

// yargs.command({
//   command: "delete",
//   describe: "to delete an item",
//   handler: () => {
//     console.log("you have already deleted an item");
//   },
// });

// console.log(yargs.argv);

////////////////////////////
// const person1 = {
//   fname: "islam",
//   lname: "mohamed",
//   city: "mansoura",
// };

// //   console.log(person1.city)

// const person1Json = JSON.stringify(person1);

// console.log(person1Json);

// const person1Obj = JSON.parse(person1Json);

// console.log(person1Obj);
// const fs = require("fs");

// fs.writeFileSync("data10.json", person1Json);
////////////////////////////////       lec-3          /////////////////////////////////////

//add
const data10 = require("./data10"); // عشان اربط الفايليين ببعض

const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: " to add an item",
  builder: {
    fname: {
      describe: "this is the first name desc in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name desc in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    // console.log("you have already added an item");
    // console.log(x.fname, x.lname);
    data10.addperson(x.id, x.fname, x.lname, x.age); // ببعت لل data10 البيانات الي عاوز ادخلها
  },
});

// console.log(yargs.argv)

//delete
yargs.command({
  command: "delete",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "the id you want to delete",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    // console.log("you have already deleted an item");
    data10.deleteData(x.id);
  },
});

//read
yargs.command({
  command: "read",
  describe: "to read one data ",
  builder: {
    id: {
      describe: "this is id desc in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.readData(x.id);
  },
});
//list data
yargs.command({
  command: "list",
  describe: "to list data",
  handler: () => {
    data10.listData();
  },
});

//update
yargs.command({
  command: "update",
  describe: "to update data",
  builder: {
    fname: {
      describe: "this is the first name desc in update command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name desc in update command",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "this is the age  desc in update command",
      demandOption: true,
      type: "string",
    },
    id: {
      describe: "this is the id  desc in update command",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data10.updateData(x.id, x.fname, x.lname, x.age);
  },
});

// console.log(yargs.argv);
yargs.parse(); //////  بتطبع الي جوا handeler بس
