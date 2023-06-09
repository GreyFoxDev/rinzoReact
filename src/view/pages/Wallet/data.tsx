import {
	IconActivity,
	IconAnalytics,
	IconItems,
	IconFloorPrice,
	IconNewListings,
	IconOffers,
	IconTransferred,
} from 'src/assets/icons';

import {
	tBaseSelect,
	tCollectionItem,
	tAdditionData,
	tTimeFilter,
	tTableHeader,
} from 'src/typed/types';

import { tAvatar, tStats, tHistoryRows } from './types';

import avatar1 from 'src/assets/images/avatars/avatar1.svg';
import avatar2 from 'src/assets/images/avatars/avatar2.svg';
import avatar3 from 'src/assets/images/avatars/avatar3.svg';
import avatar4 from 'src/assets/images/avatars/avatar4.svg';
import avatar5 from 'src/assets/images/avatars/avatar5.svg';

import pic from 'src/assets/images/NFT/nft.png';
import pic1 from 'src/assets/images/home/tableNFT/nft11.png';

import market1 from "src/assets/images/markets/market1.svg";
import { toLocaleUS } from 'src/helpers';
import { tActivitiesResult } from 'src/typed/requests/activities/tActivities';

export const achievements = {
	achievements_recieved: [
		{
			id: 1,
			name: 'Blue Ronin',
			type: 'blue_ronin',
		},
		{
			id: 2,
			name: 'Best Sell',
			type: 'best_sell',
		},
		{
			id: 3,
			name: 'Lowest Percent Deal',
			type: 'lowest_percent_deal',
		},
		{
			id: 4,
			name: 'The Fastest Purchase Offer',
			type: 'fastest_purchase_offer',
		},
	],
	achievements_upcomming: [
		{
			id: 1,
			type: 'blue_ronin',
			progress: 20,
		},
		{
			id: 2,
			type: 'shell',
			progress: 50,
		},
		{
			id: 3,
			type: 'dog',
			progress: 80,
		},
		{
			id: 4,
			type: 'dove',
			progress: 0,
		},
		{
			id: 5,
			type: 'rabbit',
			progress: 0,
		},
		{
			id: 6,
			type: 'blue_ronin',
			progress: 0,
		},
	],
	cooler_when: 89,
};

export const items = [
	{ id: 1, to: 'portfolio', title: 'Portfolio', image: <IconItems /> },
	{ id: 2, to: 'statistics', title: 'Statistics', image: <IconAnalytics /> },
	{ id: 3, to: 'activity', title: 'Activity', image: <IconActivity /> },
];

export const selectData: tBaseSelect = [
	{ title: 'Recently Acquired', key: 'recently_acquired' },
	{ title: 'Price (Hight to Low) ', key: 'price_hight_low' },
	{ title: 'Price (Low to High)', key: 'price_low_hight' },
	{ title: 'Rarity ', key: 'rarity ' },
	{ title: 'By floor', key: 'by_floor' },
	{ title: 'By volume', key: 'by_volume' },
];

export const portfolioNFTS: tCollectionItem[] = [
  {
    id: 1,
    name: 'Tavish Foxchase',
    collection: {
      slug: 'cyber-brokers',
      name: 'CyberBrokers',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 65.032,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 2,
    name: 'KumaBoss #4902',
    collection: {
      slug: 'kuma-boss-NFT',
      name: 'KumaBossNFT',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 65.032,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 3,
    name: '2942',
    collection: {
      slug: 'mutant-ape-yacht-club',
      name: 'Mutant Ape Yacht Club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 56.34,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: false,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 4,
    name: 'Life Stream',
    collection: {
      slug: 'parallel-alpha',
      name: 'Parallel Alpha',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 5,
    name: 'CryptoPunk #3100',
    collection: {
      slug: 'crypto-punks',
      name: 'CryptoPunks',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 6,
    name: '2942',
    collection: {
      slug: 'mutant-ape-yacht-club',
      name: 'Mutant Ape Yacht Club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: pic,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
];

export const rows: tActivitiesResult[] = [
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9989",
    image: "ipfs://QmRixhzz7vuF7Lq1h9XrH8rCyL7kGBZRf3i79ArqDmk7eN",
    name: "BoredApeYachtClub 9989",
    hash: "0x8170d3f429371222d7547a98a933908b19c0ea446b231cabeb47e696a2873ee5",
    priceWei: "240000000000000000",
    priceUsd: 684.94,
    rarity: 354,
    rank: 201,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9988",
    image: "ipfs://QmU7fZA7zVbSytGLWpMXDnCxF9s64VWVuKhuerzjtcX54X",
    name: "BoredApeYachtClub 9988",
    hash: "0x8170d3f429371222d7547a98a933908b19c0ea446b231cabeb47e696a2873ee5",
    priceWei: "240000000000000000",
    priceUsd: 684.94,
    rarity: 133,
    rank: 6698,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9987",
    image: "ipfs://QmW9mEm8XPw6heoMw8hYon81VaRC4F5m8D2fjJFtvwjCsJ",
    name: "BoredApeYachtClub 9987",
    hash: "0x8170d3f429371222d7547a98a933908b19c0ea446b231cabeb47e696a2873ee5",
    priceWei: "240000000000000000",
    priceUsd: 684.94,
    rarity: 105,
    rank: 8481,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9986",
    image: "ipfs://QmTuNQooKPJ8aF6aMvQpkUx4kV21ngUMe9HptJQpmJfR8e",
    name: "BoredApeYachtClub 9986",
    hash: "0xd72f399aa89aee7b27562c230d4b2d5881941aba1f67e27003d1473540c56730",
    priceWei: "160000000000000000",
    priceUsd: 456.63,
    rarity: 155,
    rank: 5005,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9985",
    image: "ipfs://QmUy2aSNBkEtRgiA8xCNDiyN6wALDRcbasia4jM7JLC1cv",
    name: "BoredApeYachtClub 9985",
    hash: "0xd72f399aa89aee7b27562c230d4b2d5881941aba1f67e27003d1473540c56730",
    priceWei: "160000000000000000",
    priceUsd: 456.63,
    rarity: 200,
    rank: 2507,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9993",
    image: "ipfs://Qmc9a8HUENWiHTDov7SZ8Ncm4aFBSAwq4UgPkenHDvfTjY",
    name: "BoredApeYachtClub 9993",
    hash: "0x9108583cb2e1472b8fb8b0ea166d603584c717e2d8ee815b2a28fbb915db1ed2",
    priceWei: "80000000000000000",
    priceUsd: 228.31,
    rarity: 44,
    rank: 9954,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9966",
    image: "ipfs://QmbsHrhZF7x1mU2XLTXwwDvhn1DidR6wMXoExVRfeCqL1h",
    name: "BoredApeYachtClub 9966",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 142,
    rank: 5961,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9971",
    image: "ipfs://QmW44wbsGXSEvVYuCUzT7mhu9SACggQKcmMWo6Y1Mc1Qee",
    name: "BoredApeYachtClub 9971",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 82,
    rank: 9410,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9968",
    image: "ipfs://QmcMTLxwK4SAJuYCaSUfEXQPEhAvsyQXp2X3CquKSmxDAg",
    name: "BoredApeYachtClub 9968",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 126,
    rank: 7176,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9973",
    image: "ipfs://QmNs7bSj8NyfHED8YjgFtQdvDKVhh72YDhDaHHMpcSkwfH",
    name: "BoredApeYachtClub 9973",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 183,
    rank: 3276,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9974",
    image: "ipfs://QmXHu7pFhp5sUJi1aajkmsgcFBuSK6y93mWz5czvY8A8hA",
    name: "BoredApeYachtClub 9974",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 204,
    rank: 2319,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9972",
    image: "ipfs://QmSGmMwXdBXhdot38pSNg83myPjBNeDxF4vHkvLznm9y2Z",
    name: "BoredApeYachtClub 9972",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 149,
    rank: 5474,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9969",
    image: "ipfs://QmNvEWSgmQP7qrpo9kxZyzGq95CZcq5sHDmSS8MD27mvF3",
    name: "BoredApeYachtClub 9969",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 108,
    rank: 8312,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9967",
    image: "ipfs://QmVvXQekNfb8BuvCQyHUcpj3FQPxqhjtaZhJC8TBwETgx1",
    name: "BoredApeYachtClub 9967",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 318,
    rank: 372,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9965",
    image: "ipfs://QmbQAiFTdw7jVraqht7Ljfeg51GssvjDp9iHrjA2sXaz57",
    name: "BoredApeYachtClub 9965",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 150,
    rank: 5375,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9970",
    image: "ipfs://QmaQeTbdMGvHtJeDjix3NkwCqwQGqVRqir5ippwEeKvuvq",
    name: "BoredApeYachtClub 9970",
    hash: "0xd8c5a337f5863f3b7caa859faaefc1c41c7bc47985bb1f51d4bdf3f855fff968",
    priceWei: "800000000000000000",
    priceUsd: 2283.13,
    rarity: 159,
    rank: 4747,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9979",
    image: "ipfs://QmS4EcHmJyaHhrJ3LwPJcSjPzXQL5ssvSzSvgh7BjUx4zp",
    name: "BoredApeYachtClub 9979",
    hash: "0x36171234e6ca80ecb9fa6b5d82fa16c4dc82bce63c365928f2b5b4cbb0d4eed1",
    priceWei: "560000000000000064",
    priceUsd: 1598.19,
    rarity: 186,
    rank: 3117,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9976",
    image: "ipfs://QmayveerapVYVZvQ1Rnv5SmheGM6AnhL56kubjnXW2uZM1",
    name: "BoredApeYachtClub 9976",
    hash: "0x36171234e6ca80ecb9fa6b5d82fa16c4dc82bce63c365928f2b5b4cbb0d4eed1",
    priceWei: "560000000000000064",
    priceUsd: 1598.19,
    rarity: 149,
    rank: 5518,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9978",
    image: "ipfs://Qme1mgfFYATQhEwEMDLadU5jraWJbJRaE2gCGyZrmTgdZQ",
    name: "BoredApeYachtClub 9978",
    hash: "0x36171234e6ca80ecb9fa6b5d82fa16c4dc82bce63c365928f2b5b4cbb0d4eed1",
    priceWei: "560000000000000064",
    priceUsd: 1598.19,
    rarity: 188,
    rank: 3002,
  },
  {
    timestamp: "2021-05-01T08:35:17Z",
    type: "mint",
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    tokenID: "9977",
    image: "ipfs://QmRtEfaJPNXPrYsqMqj2YC8CjWhTiPgwiRYxCsKffYqX9R",
    name: "BoredApeYachtClub 9977",
    hash: "0x36171234e6ca80ecb9fa6b5d82fa16c4dc82bce63c365928f2b5b4cbb0d4eed1",
    priceWei: "560000000000000064",
    priceUsd: 1598.19,
    rarity: 165,
    rank: 4343,
  },
];

export const additionData: tAdditionData[] = [
	{ id: '1', image: <IconNewListings />, title: 'Listed', price: { value: 9 } },
	{ id: '2', image: <IconFloorPrice />, title: 'Sold', price: { value: 33 } },
	{ id: '3', image: <IconOffers />, title: 'Offers', price: { value: 4.501 } },
	{ id: '4', image: <IconTransferred />, title: 'Transferred', price: { value: 22 } },
];

export const rinzoAvatarts: tAvatar[] = [
	{ id: 1, imageUrl: avatar1, name: 'Sword Master' },
	{ id: 2, imageUrl: avatar2, name: 'Emperor Guardian' },
	{ id: 3, imageUrl: avatar3, name: 'Forest Rogue' },
	{ id: 4, imageUrl: avatar4, name: 'Renegade' },
	{ id: 5, imageUrl: avatar5, name: 'Silent Ronin' },
];

export const statsTimeFilter: tTimeFilter[] = [
  { val: '1d', title: '24h', check: true },
	{ val: '7d', title: '7d', check: false },
	{ val: '30d', title: '30d', check: false },
	{ val: '3mo', title: '3mo', check: false },
	{ val: '6mo', title: '6mo', check: false },
	{ val: '1y', title: '1y', check: false },
];

export const statsInfo: tStats[] = [
	{
		id: 1,
		title: 'Amount of Offers Sent',
		amount: 54,
	},
	{
		id: 2,
		title: 'Amount of Offers Received',
		amount: 68,
	},
	{
		id: 3,
		title: 'Average Offers Sent',
		price: toLocaleUS(67431),
	},
	{
		id: 4,
		title: 'Average Offers Received',
		price: toLocaleUS(78.76),
	},
	{
		id: 5,
		title: 'Average Profit for Trade',
		price: toLocaleUS(16054),
	},
	{
		id: 6,
		title: 'Highest Profit',
		price: toLocaleUS(20.54),
	},
	{
		id: 7,
		title: 'Total Amount Spent',
		price: toLocaleUS(321324.5),
	},
	{
		id: 8,
		title: 'Average Lost per Trade',
		price: toLocaleUS(0.546),
	},
	{
		id: 9,
		title: 'Highest Loss',
		price: toLocaleUS(1.022),
	},
	{
		id: 10,
		title: 'Average Amount Spent',
		price: toLocaleUS(94247),
	},
];

export const historyColumn: tTableHeader[] = [
	{
		key: 'event',
		name: 'Event',
		isSort: false,
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'market',
		nameHidden: 'Market',
		isSort: false,
		align: 'center',
		collumnClassName: 'mobile-padding',
	},
	{
		key: 'item',
		name: 'Item',
		isSort: false,
	},
	{
		key: 'empty',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'profitability',
		name: 'Profitability',
		isSort: true,
	},
	{
		key: 'gas_spent',
		name: 'Gas Spent',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'lost_gain',
		name: 'Lost/Gain (%)',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'total_made',
		name: 'Total Made',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'transaction_ID',
		name: 'Transaction ID',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'date',
		name: 'Date',
		isSort: false,
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty2',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-visible',
	},
];

export const historyData: tHistoryRows[] = [
	{
		id: 1,
		event: 'sale',
		market: [market1],
		nft: {
			imageUrl: pic1,
			name: '#3867',
		},
		collection: {
			name: 'Peachy Puch#22',
			slug: 'peachy-puch#22',
		},
		profitability: toLocaleUS(34.23),
		gas_spent: toLocaleUS(2.03),
		lost_gain: { value: 20, duration: true },
		total_made: '$3.5K',
		transaction_ID: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', link: '' },
		date: '04/08/2022',
		open: false,
	},
	{
		id: 2,
		event: 'buy',
		market: [market1],
		nft: {
			imageUrl: pic1,
			name: '#3867',
		},
		collection: {
			name: 'Peachy Puch#22',
			slug: 'peachy-puch#22',
		},
		profitability: toLocaleUS(34.23),
		gas_spent: toLocaleUS(2.03),
		lost_gain: { value: 20, duration: true },
		total_made: '$3.5K',
		transaction_ID: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', link: '' },
		date: '04/08/2022',
		className: 'first',
		open: false,
	},
	{
		id: 3,
		event: 'mint',
		market: [market1],
		nft: {
			imageUrl: pic1,
			name: '#3867',
		},
		collection: {
			name: 'Peachy Puch#22',
			slug: 'peachy-puch#22',
		},
		profitability: toLocaleUS(34.23),
		gas_spent: toLocaleUS(2.03),
		lost_gain: { value: 20, duration: true },
		total_made: '$3.5K',
		transaction_ID: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', link: '' },
		date: '04/08/2022',
		className: 'last',
		open: false,
	},
	{
		id: 4,
		event: 'sale',
		market: [market1],
		nft: {
			imageUrl: pic1,
			name: '#3867',
		},
		collection: {
			name: 'Peachy Puch#22',
			slug: 'peachy-puch#22',
		},
		profitability: toLocaleUS(3423),
		gas_spent: toLocaleUS(20.3),
		lost_gain: { value: 20, duration: true },
		total_made: '$3.5K',
		transaction_ID: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', link: '' },
		date: '04/08/2022',
		open: false,
	},
];
