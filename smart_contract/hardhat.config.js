
require ('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/AGgNtw-grRVuXXh5GPza0HxAylJ5et2g',
        accounts:['eccca3443186a1ee963d4baa6fc8632bba0f5fd5c1b5a4bdd22525f21e393611']
    }
  }
}
