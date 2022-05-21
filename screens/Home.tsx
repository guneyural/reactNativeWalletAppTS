import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import CardSection from '../components/Cards/CardSection';
import Logo1 from '../assets/cards/mc.png';
import Logo2 from '../assets/cards/visa_white.png';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';
import {RootStackParamList} from '../navigators/RootStack';
import {StackScreenProps} from '@react-navigation/stack';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = ({navigation}) => {
  const cardsData = [
    {
      id: 1,
      accountNo: '3845757744',
      balance: 2000.15,
      alias: 'Work Debit',
      logo: Logo1,
      img: portrait1,
    },
    {
      id: 2,
      accountNo: '3845757561',
      balance: 1200.05,
      alias: 'Personal Prepaid',
      logo: Logo2,
      img: portrait2,
    },
    {
      id: 3,
      accountNo: '3845758844',
      balance: 5600.83,
      alias: 'School Prepaid',
      logo: Logo1,
      img: portrait3,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-$86.00',
      date: '13 Sep 2021',
      title: 'Taxi',
      subtitle: 'Uber car',
      art: {background: colors.primary, icon: 'car'},
    },
    {
      id: 2,
      amount: '-$286.00',
      date: '14 Sep 2021',
      title: 'Shopping',
      subtitle: 'Ali express',
      art: {background: colors.tertiary, icon: 'cart'},
    },
    {
      id: 3,
      amount: '-$586.00',
      date: '14 Aug 2021',
      title: 'Travel',
      subtitle: 'Emirates',
      art: {background: colors.accent, icon: 'airplane'},
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '2450.56',
      name: 'Coby Andoh',
      background: colors.tertiary,
    },
    {
      id: 2,
      amount: '4450.87',
      name: 'Harleen Scot',
      background: colors.primary,
    },
    {
      id: 3,
      amount: '1277.16',
      name: 'James Corbyn',
      background: colors.accent,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
