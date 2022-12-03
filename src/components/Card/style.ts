import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginVertical: 10,
        marginHorizontal: 30,
        flexDirection: 'row',
        // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'white',
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    date: {
        paddingRight: 5,
        borderRightWidth: 1,
        marginRight: 5,
        fontSize: 12,
        alignSelf: 'center',
    },
    title: {
        maxWidth: '70%',
        
    }
});