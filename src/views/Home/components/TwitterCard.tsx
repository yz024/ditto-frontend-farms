import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled, { keyframes } from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const Glow = keyframes`
  from {
    box-shadow:0px 0px 5px 2px #ffdd00;
  }
  to {
    box-shadow:0px 0px 15px 7px #ffdd00;
  }
`

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  animation: ${Glow} 1s infinite alternate;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

// toChange

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Twitter Updates')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'SaiyanSwap'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
