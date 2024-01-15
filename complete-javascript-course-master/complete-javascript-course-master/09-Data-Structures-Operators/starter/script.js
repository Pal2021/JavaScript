'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// const arr=[2,3,4];
// const b=arr[0];
// const a=arr[1];
// const c=arr[2];
// const[x,y,z]=arr;
// console.log(arr);
// const{name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const arr=[7,8,9];
// const bad=[1,2,arr[0],arr[1],arr[2]];
// console.log(bad);
// const newarr=[1,2,...arr];
// console.log(newarr);

// const arr=[1,2, ...[3,4]];

// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);
// const[pizza, ,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(pizza,risotto,otherFood)
// const arr=[1,2,3,4,5];
// const arr2=[-1,0,...arr];
// //console.log(arr2);
// for(const item of arr2){
//   console.log(item);
// }
// for(const item of arr2.entries()){
//   console.log();
// }
// const pro=Object.keys(restaurant.openingHours);
// console.log(pro);
// console.log(`We are open on ${pro.length} days`)

// const o=new Set([
//   'A',
//   'B',
//   'c',
//   'd'
// ])
// console.log(o)
// console.log(o.size)
// const re=new Map();
// re.set('name','c');
// re.set(1,'fir');
// console.log()

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { name, openingHours, categories } = restaurant;
// // console.log(name);
// // console.log(openingHours);
// // console.log(categories);

// const {
//   name: restaurantname,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(name, openingHours, categories);
const ans = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(ans);
