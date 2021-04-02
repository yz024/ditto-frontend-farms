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

  a[href="https://twitter.com/FinanceGoose"] {
    display: none;
  }

  .sc-bkzZxe > svg[xmlns="http://www.w3.org/2000/svg"] {
    display: none;
  }

  .dxmefR {
    color: #1B4693;
  }

  .bbSIME {
    color: #1B4693;
  }

  .imhYNd {
    color: #1B4693;
  }

  .kxDGqL {
    color: #1B4693;
  }

  .kxDFDt {
    color: #1B4693;
  }

  .diGZoE {
    color: #1B4693;
  }

  .eugENQ {
    color: #1B4693;
  }

  .eIORCb {
    color: #1B4693;
  }

  .eNHRIG {
    fill: #1B4693;
  }

  .ZkHOl {
    color: #1B4693; 
  }

  .ewCGLh {
    fill: #1B4693; 
  }

  .jvgOul {
    color: #1B4693; 
  }

  .eoPRXO {
    color: #1B4693; 
  }

  .ZaJOI  {
    color: #1B4693; 
  }

  .gTRKTy {
    color: #1B4693; 
  }

  .kjBbpq {
    background-color: #1B4693; 
  }

  .cxRybB {
    color: #1B4693; 
  }

  .kbxvML {
    color: #1B4693; 
  }

  .iSwxPe {
    fill: #1B4693; 
  }

  .lkvAzg {
    fill: #1B4693; 
  }

  .kpGBdr {
    color: #2054B0;
  }

  .bGXgog {
    color: #2054B0;
  }

  .WwULG {
    color: #2054B0;
  }


`

export default GlobalStyle
