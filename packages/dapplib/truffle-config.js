require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain eternal gesture nasty fringe ski'; 
let testAccounts = [
"0x610c06f623c7177092010d6215c8a91d95931e513f84a85f756a15e812a42c7f",
"0x56986e0225e52d0c655cc746d491aa296d3ec8a98db3295fd42aadcfdac33dd9",
"0xf4173a48ffa2ef5e10dc22873e611feeb332526b6238cdc23a42d3df31943afa",
"0x6b86ae8d4376bec8eda5d83c0313aad892048e51d9bedc1f0cc98423dad17f27",
"0x427f1884567c70b009ad11623b0541f29f8d99b7d3e935a2324ff61fd194e1b2",
"0x3c8c8ec23433d78cfa1d62ba4cfde5cbaf36227845398b03ac2d4ff462442edd",
"0x89241daee2716f9704c3b57841d9fe31f02ae8b34b3b739bcfcde74c8d983550",
"0x2f8e5b6fc21be43c0ce6a03e1b59f398567d1eaa3ff7e0c6d8edcfa2784189e5",
"0x8004860b93c2e80182c42c991a86ebecc962cf486e68498b4e43949388725a79",
"0xef1d91be130d8104cf4ced099a2db897fefe1eca122cd767c500f8d00fea8f99"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


