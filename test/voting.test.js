const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 is a constructor function
const web3 = new Web3(ganache.provider());


// --- Mocha Testing --- //
// class Car {
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car;
// beforeEach( () => {
//     car = new Car();
//     console.log('a');
// });

// describe('Car', () => {
//     it('park', () => {
//          // const car = new Car();
//         assert.equal(car.park(), 'stopped');
//     });
//     it('drive', () => {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom');
//     });
// });


beforeEach ( () => {

    web3.eth.getAccounts() // get List of all accounts
        .then( fetchedAccounts => {
            console.log(fetchedAccounts)
        });
});

describe('Voting', () => {
    it('deploys a contract', () => {
        
    });
});