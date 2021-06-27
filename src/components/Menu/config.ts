import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x87535D127904527B84a13d11c300Cd54300aC6FC',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Voting (Coming Soon)',
    icon: 'IfoIcon',
    href: '/voting',
  },
  {
    label: '',
    icon: 'NftIcon',
    href: '/vaults',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru Chart',
        href: 'https://dex.guru/token/0x87535D127904527B84a13d11c300Cd54300aC6FC-polygon',
      },
      {
        label: 'Polygon Scan',
        href: 'https://polygonscan.com/address/0x87535D127904527B84a13d11c300Cd54300aC6FC',
      },
      /*
      {
        label: 'Featured on vFat',
        href: 'https://vfat.tools/polygon/polydmnd/',
      },
      
      {
        label: 'Featured on Dapp Radar',
        href: 'https://dappradar.com/polygon/defi/polydmnd-finance',
      },
      */
      {
        label: 'Polychart',
        href: 'https://app.polychart.io/explorer/polygon/0x87535D127904527B84a13d11c300Cd54300aC6FC',
      },
    ]
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      
      {
        label: "Docs",
        href: "https://polydiamondfinance.gitbook.io/polydiamond-finance/",
      },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
]

export default config
