// // console.log("Menyalakan mesin kopi");`
// // console.log("Menggiling biji kopi");
// // console.log("Memanaskan air");
// // console.log("Mencampurkan air dan kopi");
// // console.log("Menuangkan kopi ke dalam gelas");
// // console.log("Menuangkan susu ke dalam gelas");
// // console.log("Kopi Anda sudah siap!");

// // const {coffeeStock, isCoffeeMachineReady} = require('./state');
// import { coffeeStock, isCoffeeMachineReady } from "./state.js";

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// const displayStock = (coffeeStock) => {
//   for (const it in coffeeStock) {
//     console.log(it);
//   }
// };

// displayStock(coffeeStock);

// // console.log(coffeeStock["robusta"]);
// // console.log(isCoffeeMachineReady);
// makeCoffee("robusta", 80);


import _ from 'lodash';

const myArr = [1, 2, 3, 4, 5];
const sum = _.sum(myArr);
console.log(sum);
