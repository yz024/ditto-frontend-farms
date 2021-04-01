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
        href: 'https://exchange.charmanderdefi.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.charmanderdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/charmanderdefi',
      },
      {
        label: 'Docs',
        href: 'https://charmanderdefi.gitbook.io/charmander-finance-1/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@charmanderdefi/charmander-defi-fiery-yield-farming-255deab5f9ad'
      },
    ],
  },
]

export default config
