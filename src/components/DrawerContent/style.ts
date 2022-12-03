import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D8E3FF',
        flex: 1,
    },
    img: { 
        resizeMode: 'contain',
        alignSelf: 'center',
        backgroundColor: '#f5f5f5', 
        height: 200, 
        borderRadius: 999,
        width: 200,
        marginVertical: 40,
    },
    name: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 10,
    },
    bod: {
        textAlign: 'center',
        fontSize: 22,
        marginRight: 10,
    },
    bodWrapper: {
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    btn: {
        backgroundColor: 'red',
        alignSelf: 'center', 
        width: '80%' 
    },
    btnText: {
        color: 'white'
    },
});