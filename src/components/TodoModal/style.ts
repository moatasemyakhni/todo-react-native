import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: { 
        alignSelf: 'center', 
        position:'absolute', 
        top: 70, 
        zIndex: 9999 
    },
    scrollContainer: { 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        flex: 1, 
        marginTop: 80, 
        paddingTop: 30,
    },
    text: {
        color: 'white', 
        paddingTop: 20
    },
    title: {
        textAlign: 'center', 
        fontSize: 20, 
        borderBottomWidth: 1, 
        borderBottomColor: 'white', 
        paddingBottom: 10,
    },
    date: {
        fontSize: 14, 
        paddingLeft: 5, 
        paddingBottom: 5,
    },
    image: { 
        width: '100%',
        height: 200,
    },
    description: { 
        color: 'white', 
        fontSize: 18, 
        paddingTop: 5, 
        paddingLeft: 5, 
    },
});