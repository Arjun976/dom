// let count=false;

// let countvalue=new Promise(function(resolve,reject){
//     if(count==true){
//         resolve("count is true");
//     }
//     else{
//         reject("count is false");
//     }
// })

// countvalue.then(
//     function(result){
//         console.log(result);
//     }
// )
// .catch(
//     function(error){
//         console.log(error);
//     }
// )

// lottery

// let luck=new Promise(function(resolve,reject){
//     let lotnum=5;
//     let pricenum=Math.floor(Math.random()*6);
//     if  (lotnum==pricenum){
//         resolve("you won");
//     }
//     else{
//         reject("you lost");
//     }
// })
// luck.then(
//     function(result){
//         console.log(result);
//     }
// )
// .catch(
//     function(error){
//         console.log(error);
//     }
// )