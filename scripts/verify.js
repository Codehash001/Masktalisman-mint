require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')

const _initBaseURI='ipfs://bafybeiajl7wr67f2b7aiefrakv2w6quog5sqhf6p3ii5b2euushg3rl5hy/'


async function main() {

  await hre.run('verify:verify', {
    address: '0x92ccd40D345B52730837E8a9f9683D284BCdDf89', //mainnet
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
