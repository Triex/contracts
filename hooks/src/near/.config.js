// Run everything locally!
//
//   * NEAR & Ethereum networks & bridge: https://github.com/near/rainbow-bridge-cli
//   * NEAR "contract helper": https://github.com/near/near-contract-helper
//   * NEAR Wallet: https://github.com/near/near-wallet
//
// Then use `yarn local` to use config created by rainbow-bridge-cli
// const homedir = require('os').homedir();
// const path = require('path');
// const { readFileSync } = require('fs');
// let localConfig;
// try {
//   localConfig = require(path.join(homedir, '.rainbow', 'config.json'));
// } catch (e) {
//   localConfig = {};
// }

module.exports = {
  development: {
    ethClientAddress: '0xF721c979db97413AA9D0F91ad531FaBF769bb09C',
    ethEd25519Address: '0x9003342d15B21b4C42e1702447fE2f39FfAF55C2',
    ethErc20AbiText: readFileSync('./erc20.abi'),
    ethErc20Address: '0x3e13318e92F0C67Ca10f0120372E998d43E6a8E8',
    ethLockerAbiText: readFileSync(
      '../../node_modules/rainbow-bridge-sol/token-locker/dist/TokenLocker.full.abi'
    ),
    ethLockerAddress: '0xdEe22a095B15205E28FB1b49C5275E2EDA666Afa',
    ethNetwork: 'rinkeby',
    ethNodeUrl: 'https://rinkeby.infura.io/v3/TODO',
    ethProverAddress: '0xc5D62d66B8650E6242D9936c7e50E959BA0F9E37',
    nearClientAccount: 'ethonnearclient10',
    nearFunTokenAccount: 'mint_with_json-workaround-for-mintablefuntoken.chad',
    nearHelperUrl: 'https://helper.testnet.near.org/',
    nearNetworkId: 'testnet',
    nearNodeUrl: 'https://rpc.testnet.near.org',
    nearProverAccount: 'ethonnearprover10',
    nearWalletUrl: 'https://wallet.testnet.near.org/',
  },
};
