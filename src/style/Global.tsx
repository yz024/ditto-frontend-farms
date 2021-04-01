import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .sc-bkzZxe svg:first-child {
    display: none;
  }

  .sc-eCssSg a {
    display: none;
  }

  .fZXDjo {
    color: #1B4693;
  }

  .jWkKBV {
    color: #1B4693;
  }

  .bwaTUZ {
    color: #1B4693;
  }

  .ghfaNa {
    color: #1B4693;
  }

  .hYCYbf {
    color: #1B4693;
  }

  .dJjSLh {
    color: #1B4693;
  }

  .bFyyYW {
    color: #1B4693;
  }

  .fxgYEI {
    color: #1B4693;
  }

  .jUTRyE {
    color: #1B4693;
  }

  .doXHqk {
    color: #1B4693; 
  }

  .kYzRJA {
    color: #1B4693; 
  }

  .jXTHQz {
    color: #1B4693; 
  }

  .gyZqgP {
    color: #1B4693; 
  }

  .hfQhwo {
    color: #1B4693; 
  }

  .lcdoOV {
    color: #1B4693; 
  }

  .cNpGDU {
    color: #1B4693; 
  }

  .ldIlNr svg {
    fill: #1B4693; 
  }

  .vzgrd svg {
    fill: #1B4693; 
  }

  .eNOLL a {
    color: #1B4693; 
  }

  .hwrYDt {
    fill: #1B4693; 
  }

  .SfwyR {
    fill: #1B4693; 
  }

  .fOxbkq {
    fill: #1B4693;
  }

  .cuuOmQ {
    fill: #1B4693;
  }

  .gHbDCl {
    color: #1B4693;
  }

  .lgXcEr {
    color: #1B4693;
  }

  .lfZZXC {
    color: #2054B0;
  }

  .bubKwl {
    color: #2054B0;
  }

  .WwULG {
    color: #2054B0;
  }


`

export default GlobalStyle
