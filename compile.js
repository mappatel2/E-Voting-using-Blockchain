const path = require('path');
const fs = require('fs');

const solc = require('solc');

const votingPath = path.resolve(__dirname, 'Contracts', 'Election.sol');
const source = fs.readFileSync(votingPath, 'utf8');


console.log(solc.compile(source, 1));

// module.exports = solc.compile(source, 1).contracts[':Storage'];
