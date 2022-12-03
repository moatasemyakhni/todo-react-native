import React,{ FC } from 'react';

import { 
    Text, 
    Modal, 
    Image,
    ScrollView, 
    TouchableOpacity, 
} from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';

interface TodoModalInterface {
    modalVisible?: boolean,
    setModalVisible?: (stat: boolean) => void,
    title?: string,
    date?: string,
    image?: string,
    description?: string,
}

const TodoModal: FC<TodoModalInterface> = ({modalVisible, setModalVisible, title, date, image, description}) => {
  return (

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      > 
        <TouchableOpacity 
            style={styles.btn} 
            onPress={() => setModalVisible(false)}
        >
            <FontAwesome name="hand-grab-o" size={48} color="#1F5B86" />
        </TouchableOpacity>

        <ScrollView style={styles.scrollContainer}>
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <Text style={[styles.text, styles.date]}>{date}</Text>
            <Image 
                source={{ 
                uri: image,
                }}
                resizeMode="cover"
                style={styles.image}
            />
            <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </Modal>
  );
}

export default TodoModal;