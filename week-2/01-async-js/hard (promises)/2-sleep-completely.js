/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
}
  
// function sleep (seconds) {

//   return new Promise((resolve) => {
//       setTimeout(() => {
//       resolve();
//       }, seconds*1000);
//   });

// }
// sleep(2).then(() => {
//   console.log('I am awake');
// });
module.exports = sleep;
