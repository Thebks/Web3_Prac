// https://eth-ropsten.alchemyapi.io/v2/qB6i2hxBaaKMMS0iBqtVwCBs4tyCemg2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solodity: {
    compilers: [
      {
        version: "0.5.0",
      },
      {
        version: "0.8.13",
        settings: {},
      },

    ],
  },
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/qB6i2hxBaaKMMS0iBqtVwCBs4tyCemg2',
      accounts: ['7996a7a6e6428299962c157bbd9219a95856c9784d7f9b1f75f0c17711bd5883'],
    },
  },
};