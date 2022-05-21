import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FC<ButtonProps> = props => {
  return (
    <ButtonView style={props.btnStyles} onPress={props.onPress}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
