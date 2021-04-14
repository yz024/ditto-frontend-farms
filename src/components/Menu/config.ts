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
        href: 'https://github.com/gengarfinance',
      },
      {
        label: 'Docs',
        href: 'https://gengarfinance.gitbook.io/gengar-finance/',
      },
      {
        label: 'Blog',
        href: 'https://gengarfinance.medium.com/pre-evolution-the-beginning-of-gengar-finance-4d5b946bdfd3'
      },
    ],
  },
]

export default config
