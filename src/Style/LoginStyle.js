const { StyleSheet } = require("react-native");

const loginStyle = StyleSheet.create({
    mainView: {
        backgroundColor: 'rgb(11,160,142)',
        flex: 1
    },
    brandName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: "center"
    },
    loginView: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 20
    },
    inputStyle: {
        marginTop: 30
    },
    loginBtn: {
        marginTop: 50,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 7
    },
    divider: {
        marginTop: 60
    },
    newAccount: {
        color: "white",
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 30
    }
})

export default loginStyle;