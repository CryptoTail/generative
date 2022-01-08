const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Cryptotail";
const description =
  "Cryptotail is a collection of 10,000 generative cocktail NFTs based on Solana blockchain.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "CT",
  seller_fee_basis_points: 250, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://cryptotail.co",
  creators: [
    {
      address: "7RDGvchaKAbCreSo1acKuww9EW8NuDtSvoPTwmmj1tfi", // Bean
      share: 50,
    },
    {
      address: "6k7R6PRqWavAFEMy9rJQsm1iEPzZEBhBMqLpm262EVpE", // T-Rex
      share: 50,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "background" },
      { name: "table" },
      { name: "cork_coaster" },
      { name: "snack" },
      { name: "garnish" },
      { name: "straw" },
      { name: "ice_cream" },
      { name: "1layer" },
      { name: "cup" },
      { name: "mouth" },
      { name: "eyes" },
      { name: "glasses" },
    ],
  },
  /*{
    growEditionSizeTo: 200,
    layersOrder: [
      { name: 'background' },
      { name: 'table'},
      { name: 'cork_coaster'},
      { name: 'snack'},
      { name: 'garnish'},
      { name: 'straw'},
      { name: '2layer_top'},
      { name: '2layer_bot'},
      { name: 'ice_cream'},
      { name: 'cup'},
      { name: 'mouth'},
      { name: 'eyes'},
      { name: 'glasses'},
    ],
  },
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: 'background' },
      { name: 'table'},
      { name: 'cork_coaster'},
      { name: 'snack'},
      { name: 'garnish'},
      { name: 'straw'},
      { name: '3layer_top'},
      { name: '3layer_mid'},
      { name: '3layer_bot'},
      { name: 'ice_cream'},
      { name: 'cup'},
      { name: 'mouth'},
      { name: 'eyes'},
      { name: 'glasses'},
    ],
  }*/
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  // 해상도 조정
  width: 350,
  height: 350,
  smoothing: false,
};

const gif = {
  // 레이어 생성 과정 gif
  export: false,
  repeat: 0,
  quality: 100,
  delay: 250,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 16 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  artist: "T-Rex",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 30,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 200,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
