require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind purity hunt sleep frame switch'; 
let testAccounts = [
"0x4cc037d3f5d995b89fda46f2170512c47ae280c8492bcf29d3fcd582d5cb10e4",
"0x16ada8c5519ecb35929f7b3db9621fde1838c43c1a170f9873c7ab6373fa916a",
"0x5cf6d9d8488d26a1d4aa88bbdb31a3a25ebe525b21a632a7f56d256621d8fb34",
"0xc88ea59ca82d706981348a659ea3106cedb525a0d2e39c93b761cb9771f1ccfe",
"0x2ac0e07fd5578dacdef0c61ede25b227fdc9999d6098cfeb7e967aab7a5de40b",
"0xbd52b2d57e78677be90f7dd94b7374a31205e443bf3d712aebce9dfa6f7a2849",
"0x3d56e266c55554833fb04ad735a6754a47266189f348d14f98be29476d42045d",
"0x5e692f40a11b4c622d68f7d262d4d1d04ef3133585cac0816928c01982c83c97",
"0x9b85bd4375f78edd3ee0f8c3e5fd4625a4c4c8a012029a7c800d9c5f68eb2e17",
"0x75d07d81a7dc4f88b852ad805ed297b2a51a49d124d7d4ed6f0b41e513613807"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

