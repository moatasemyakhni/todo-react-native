import React, { FC } from 'react';

import { styles } from './style';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { GestureResponderEvent } from 'react-native';
import { todoInterface } from '../../redux/slices/todosSlice';

interface CardInterface {
    title?: string,
    date?: string,
    onPress?: (props: GestureResponderEvent | todoInterface) => void,
}

const Card: FC<CardInterface> = ({ title, date, onPress }) => {

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

Card.defaultProps = {
    date: '01/01/1970',
    title: 'Known Title',
    onPress: () => null,
}

export default Card;