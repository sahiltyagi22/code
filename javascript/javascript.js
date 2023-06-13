//  JAVASCRIPT LOOPS 

//  FOR LOOP FOR GENERAL PURPOSES

// const arr = [1,2,3,4,5,6,7,]

// for  (let i =0;i<arr.length; i++){
//     console.log(10 * arr[i])
// }





// for iterating an object we use ==> FOR IN loop

// const obj = {
//     name : 'sahil',
//     age : 21,
//     address : 'india',
//     partner  : 'anushka' 
// }

// for (let i in obj ){
//     // console.log(i.name)
//     // console.log(obj.key)
//     // console.log ([i])
//     // console.log(key)
// }




//  for of loop (this is used to loop thriugh an iteratable object )

// const str = "hello my name is sahil tyagi"

// console.log(str.length)

// for(let i of str){
//     console.log(i);

// }



// ===================>>>>>>>>>> WHILE AND DO-WHILE LOOP<<===================================

const arr = [1,2,3,4,5,6,7,8]
let i =0;
// while(i<arr.length){
//     console.log(10 *arr[i])
//     i++
// }

do{
    console.log(10 *arr[i]);
    i++
}

while(i<10)