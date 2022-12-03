import React from 'react';

import { View, Text } from 'react-native';
import { styles } from './style';


const StackHeader = ({Icon, text}) => {
  return (
    <View style={styles.container}>
        <Icon />
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default StackHeader;