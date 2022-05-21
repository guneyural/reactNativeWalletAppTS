import React, {FC} from 'react';
import styled from 'styled-components/native';
import {AmountProps} from './types';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  flex: 1;
  align-items: center;
`;

const AmountSection: FC<AmountProps> = props => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{color: colors.secondary, marginBottom: 15}}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{color: colors.secondary, fontSize: 28}}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
