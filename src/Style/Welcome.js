import { StyleSheet } from 'react-native'

const welcomeStyle = StyleSheet.create({
    mainComp: {
        flex: 1,
        backgroundColor: "rgb(11,160,142)",
        justifyContent: 'center',

    },
    welcomeBanner: {
        height: 350,
        width: 350,
        objectFit: 'contain',
        alignSelf: "center"
    },
    brandName: {
        color: "white",
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:0
    },
    btnStyle: {
        width: '60%',
        alignSelf: 'center',
        padding:2,
        marginTop:80
    }

})

export default welcomeStyle