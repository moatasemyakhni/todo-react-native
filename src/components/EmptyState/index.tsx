import React, {FC} from 'react';

import { styles } from './styles';
import { View, Text } from 'react-native';


interface EmptyStateInterface {
    Icon: () => JSX.Element,
    text: string,
}


const EmptyState: FC<EmptyStateInterface> = ({Icon, text}) => {

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}


EmptyState.defaultProps = {
    text: 'EMPTY PAGE'
}

export default EmptyState;
