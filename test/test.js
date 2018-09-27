const expect = require('chai').expect;
const eba = require('../eba-client.js');

// quick sanity check
describe('eba-node-client', () => {
    it('init url to eba.ibm.com', () => {
        const ebaClient = new eba.Client();
        expect(ebaClient.url).to.equal('https://eba.ibm.com/');
    });
});