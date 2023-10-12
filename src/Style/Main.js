import { StyleSheet } from 'react-native'

const mainStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(223,80,19)",

    },
    menuStyle: {
        height: 43,
        borderRadius: 10,
        backgroundColor: "rgb(11,160,142)",
        elevation: 5,
    },
    bgCommon: {
        backgroundColor: "rgb(223,80,19)",
        paddingLeft:15
    },
    billSectionView: {
        height: 320,
        width: '90%',
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        elevation: 5
    },
    recentBillTxt: {
        color: "black",
        fontWeight: '500',
        fontFamily: "sans-serif",
        fontSize: 18
    },
    TitleSectionView: {
        flexDirection: 'row',
        height: 30,
        justifyContent: "space-between"
    },
    badgeNotify: {
        position: 'absolute',
        marginTop: -7
    },
    flatListStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "rgb(197, 189, 189);"

    },
    downArrow: {
        borderWidth: 1,
        borderColor: "orange",
        alignSelf: 'center'
    },
    billAmount: {
        textAlign: 'center',
        fontSize: 15,
        backgroundColor: "rgb(87, 224, 208)",
        padding: 5,
        width: '80%',
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 2,
        fontWeight: "bold"
    },
    referalRewardView: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 40
    },
    twoBtnRefAwa: {
        width: '40%',
        borderRadius: 4,
        elevation: 5,
        
    },
    setDiscount:{
        marginTop:30, 
        borderRadius:3, 
        width:'83%',
        alignSelf:'center',
        elevation:5,
    },
    modalContainerStyle:{
        backgroundColor:"rgb(11,160,142)",
        height:'45%',
        width:'90%',
        alignSelf:"center",
        elevation:5,
        padding:20,
        borderRadius:10,
        borderWidth:2,
        borderColor:'grey'
    },
    refralCodeTxtHead:{
        textAlign:'center',
        position:'relative', 
        fontSize:22, 
        fontWeight:"bold", 
        color:"white"
    },
    referalView:{
        backgroundColor: "white", 
        flexDirection: "row" ,
        justifyContent:"space-between", 
        elevation:5, 
        borderRadius:5, 
        marginTop:10, 
        paddingLeft:20, 
        paddingRight:20
    },
    socialView:{
        flexDirection: "row", 
        justifyContent: "center" ,
         marginTop:10
    },
    modalContainerStyleDiscount:{
        backgroundColor:"white",
        height:'45%',
        width:'90%',
        alignSelf:"center",
        elevation:5,
        padding:20,
        borderRadius:10,
        borderWidth:2,
        borderColor:'grey'
    },
    discountCodeTxtHead:{
        textAlign:'center',
        position:'relative', 
        fontSize:22, 
        fontWeight:"bold", 
        color:"rgb(11,160,142)",
        marginBottom:20
    },
    setDiscountBtn :{
        backgroundColor:"orangered",
         width:'50%',
          alignSelf:"center", 
          marginTop:10, 
          elevation:5, 
          borderRadius:5
    }

})

export default mainStyle;