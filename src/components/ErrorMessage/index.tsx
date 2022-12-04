import React, { FC } from 'react';

import { styles } from './style';
import { Text } from 'react-native';

interface ErrorMessageInterface {
    error?: boolean,
    message?: string,
}

const ErrorMessage: FC<ErrorMessageInterface> = ({error, message}) => {
    if(error) {
        return <Text style={styles.error}> {message} </Text>
    }
}

ErrorMessage.defaultProps = {
    error: false,
    message: '',
}

export default ErrorMessage;