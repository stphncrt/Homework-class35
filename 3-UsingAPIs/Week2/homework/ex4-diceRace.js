'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
    const dice = [1, 2, 3, 4, 5];
    const promiseAll = dice.map(rollDie);
    return Promise.race(promiseAll);
}

// Refactor this function to use async/await and try/catch
async function main() {
    try {
        const result = await rollDice()
        console.log('Resolved!', result)
    } catch (error) {
        console.log('Rejected!', error.message)
    }
}
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible.
// but that doesn't prevent other promises to resolve or reject

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
    main();
}
module.exports = rollDice;