const fs = require("fs");

//لوعاو اضيف حاجه جديده
//paremete
//push
//handeler

const addperson = (id, fname, lname, age) => {
  const allData = loadInfo();

  const duplicatedData = allData.filter((obj) => obj.id === id);

  if (duplicatedData == 0) {
    allData.push({
      id,
      fname,
      lname,
      age,
    });
    saveAllData(allData);
  } else {
    console.log("ERROR DUPLICATED DATA");
  }
};

/////////////////////////////////////////

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString(); //عشان احول الفايل من بافر   الي   استرينج
    return JSON.parse(dataJson); //بحولها من استلرينج ل   جيسون
  } catch {
    return [];
  }
};

////////////////////////////

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData); // عشان احوله من اوبجيكت ل جيسون

  fs.writeFileSync("data10.json", saveAllDataJson);
};
//////////////////////////////////////////////
//to delete data using id
const deleteData = (id) => {
  const allData = loadInfo();

  const savedData = allData.filter((data) => data.id !== id);

  saveAllData(savedData);
};
//////////////////////////////////////////////
//to read data usind id
const readData = (id) => {
  const alldata = loadInfo();

  const dataToRead = alldata.find((obj) => obj.id == id);

  if (dataToRead) {
    console.log(dataToRead);
  } else {
    console.log("ID NOT FOUND");
  }
};
///////////////////////////////////////////////
//to list all data  'fname , lname '
const listData = () => {
  const alldata = loadInfo();

  alldata.forEach((obj) => {
    console.log(obj.fname, obj.lname);
  });
};
//////////////////////////////////////////////
// update data using id
const updateData = (id, fname, lname, age) => {
  const alldata = loadInfo();

  const updatedData = alldata.map((obj) => {
    if (obj.id != id) {
      return obj;
    } else {
      return { ...obj, fname, lname, age: age };
    }
  });

  saveAllData(updatedData);
};
//////////////////////////////////////////////

module.exports = {
  addperson,
  deleteData,
  readData,
  listData,
  updateData,
};
