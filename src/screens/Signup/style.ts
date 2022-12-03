import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#D8E3FF" 
    },
    scrollContainer: { 
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        margin: 30,
        padding: 10,
        borderRadius: .5,
        shadowRadius: 2,
        elevation: 0.2,
    },
    imgWrapper: { backgroundColor: 'black', 
        width:200, 
        alignSelf: 'center', 
        justifyContent: 'center', 
        height: 200, 
        marginVertical: 40, 
        borderRadius: 9999, 
        position: 'relative' 
    },
    imgText: { 
        color: 'white', 
        fontSize: 30, 
        position:'absolute', 
        left: 80, 
    },
    img: { 
        resizeMode: 'contain',
        alignSelf: 'center',
        backgroundColor: '#f5f5f5', 
        height: 200, 
        borderRadius: 999,
        width: 200,
        marginVertical: 40,
        opacity:0.2, 
    },
    input: {
        alignSelf: "center",
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        paddingLeft: 5,
        borderRadius: 5,
    },
    btnDateContainer: {
        backgroundColor:'white', 
        marginVertical: 40, 
        justifyContent: 'flex-start'
    },
    btnDateText: {
        fontSize: 16, 
        fontWeight: 'normal', 
        color:'black'
    },
    btn: { 
        backgroundColor: '#1F5B86' 
    },
    btnText: {
        textTransform: 'uppercase'
    },
});