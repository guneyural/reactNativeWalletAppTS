import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import {RootStackParamList} from '../navigators/RootStack';
import {StackScreenProps} from '@react-navigation/stack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';

type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Balance: FC<Props> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};
export default Balance;
