'use strict';
// const bookings=[];
// const cr=function(f='21jd',numP=13,pri=45){
//     const booking={
//         f,
//         numP,
//         pri,
//     };
//     console.log(booking);
//     bookings.push(booking);
//     for(let i=0;i<bookings.length;i++){
//         console.log(bookings[i]);
//     }
// }
// cr();

// const flight='LH123';
// const jone={
//     name:'pal',
//     passport:21324442,
// }
// const checkin=function(flightNum,pass){
//     flightNum='LH123';
//     pass.name='Mr.'+pass.name;
//     if(pass.passport==21324442){
//         alert('ckqsh');
//     }else{
//         alert('qjks');
//     }
// }
// checkin(flight,jone);
// console.log(flight);
// console.log(jone);
// function x(){
//     console.log("nameste");
// }
// function y(x){
//     x();
// }

// const radius=[1,2,3,4];
// const area=function(radius){
//     return Math.PI*radius*radius;
// }
// const cir=function(radius){
//    return 2*Math.PI*radius; 
// }
// const cal=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(radius.map(area))
// console.log(cal(radius,cir))

// const greet =function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greethey=greet('hey');
// greethey('pal');
// greethey('prashant');
// greet('hellow')('pal')
// const greetArr=greeting=>name=> console.log(`${greeting} ${name}`);
// greetArr('hi')('pal')
const lu={
    airline:'lu',
    icode:'LH',
    booking:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.icode}${flightNum}`)
    }
}
lu.book(239,'pal')