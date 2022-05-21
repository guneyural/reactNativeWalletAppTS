import React, {FC} from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import background from '../assets/bgs/background_v1.png';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/buttons/regularButton';
import {RootStackParamList} from '../navigators/RootStack';
import {StackScreenProps} from '@react-navigation/stack';

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome: FC<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.secondary}
      />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{width: '70%', marginBottom: 25}}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{width: '70%', marginBottom: 25}}>
            Best payment method, connects your money to your friends, family
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
