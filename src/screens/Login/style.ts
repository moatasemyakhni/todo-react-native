import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollContainer: { 
        flex: 1, 
        backgroundColor:"#D8E3FF"
    },
    container: {
        marginHorizontal: 25
    },
    title: { 
        fontFamily: 'bad-script', 
        fontSize: 32, 
        textAlign: 'center',
        marginVertical: 40,
    },
    image: { 
        width: '100%', 
        height: 300, 
        marginBottom: 40 
    },
    btn: { 
        backgroundColor: '#1F5B86' 
    },
    btnText: {
        textTransform: 'uppercase'
    },
});