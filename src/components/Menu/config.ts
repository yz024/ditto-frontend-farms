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
        href: 'https://exchange.gengarfinance.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.gengarfinance.com/#/pool',
      },
    ],
  },
  {
    label: 'Forest',
    icon: 'FarmIcon',
    href: '/forest',
  },
  {
    label: 'Safari',
    icon: 'PoolIcon',
    href: '/safari',
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
        href: '/soon',
      },
      {
        label: 'Docs',
        href: '/soon',
      },
      {
        label: 'Blog',
        href: '/soon'
      },
    ],
  },
]

export default config
