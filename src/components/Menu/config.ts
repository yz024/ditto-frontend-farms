import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Planet Earth',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Saiyan Swap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Planet Vegeta',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Planet Namek',
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
        href: 'https://github.com/squirtlefinance',
      },
      {
        label: 'Docs',
        href: 'https://squirtle-finance.gitbook.io/squirtle-finance/',
      },
      {
        label: 'Blog',
        href: 'https://squirtle-finance.medium.com/'
      },
    ],
  },
]

export default config
