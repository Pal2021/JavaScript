'use strict';
const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');
const btnclosemodel=document.querySelector('close-model');
const btnopenmodel=document.querySelector('show-model');
console.log(btnopenmodel);

for(let i=0;i<btnopenmodel.length;i++)
btnopenmodel[i].addEventListner('click',function(){
console.log('Button clicked');
});
