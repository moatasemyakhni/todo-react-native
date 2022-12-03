import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';


interface ButtonInterface {
    Icon?: () => JSX.Element,
    onPress?: () => void,
    styleContainer?: Array<ViewStyle>
    styleText?: Array<TextStyle>,
    text?: string,
}

const Button: FC<ButtonInterface> = ({Icon, onPress, styleContainer, styleText, text}) => {
    
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.iconBtn, ...styleContainer]}
    >
        <Icon />
        <Text
            style={[styles.iconText, ...styleText]}
        >
            {text}
        </Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
    styleContainer: [],
    styleText: [],
    text: '',
    onPress: () => null,
    Icon: () => null,
}

export default Button;