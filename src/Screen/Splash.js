import React from 'react'
import { Image, View, StatusBar, Text, ActivityIndicator } from 'react-native'
import myStyle from '../Style/Splash'

function Splash() {
    return (
        <View style={myStyle.mainView}>
            <StatusBar hidden />
            <View></View>
            <View>
                <Image source={require('../Img/splash.png')} style={myStyle.logo} />
                <Text style={myStyle.brandName}>SHOPSY</Text>
                <ActivityIndicator size={'large'} color={'rgb(11,160,142)'} style={myStyle.activityIndicatorStyle} />
            </View>


            <Text style={{ color: "white", justifyContent: "flex-end" }}>Powered By Shopsy</Text>

        </View>
    )
}

export default Splash
