import React, {FC} from 'react';
import styled from 'styled-components/native';
import RegularButton from '../buttons/regularButton';
import {colors} from '../colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FC = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{width: '50%'}} onPress={() => {}}>
        Cancel <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
