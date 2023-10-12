import { React } from 'react'
import { View, StatusBar, Text, ScrollView } from 'react-native'
import { TextInput, Button, Divider } from 'react-native-paper';
import loginStyle from '../Style/LoginStyle.js'
function Login() {
    return (
        <View style={loginStyle.mainView}>
            <ScrollView>
                <StatusBar barStyle={'light-content'} backgroundColor="rgb(11,160,142)" />

               

                <Text style={loginStyle.brandName}>SHOPPSY</Text>
              
                {/* CODE FOR LOGIN COMPONENT */}
                <View style={loginStyle.loginView}>
                    <TextInput label="Phone" mode='outlined' outlineColor='black' activeOutlineColor='black' style={loginStyle.inputStyle} right={<TextInput.Icon icon="phone" />} />

                    <TextInput label="Password" mode='outlined' outlineColor='black' activeOutlineColor='black' secureTextEntry style={loginStyle.inputStyle} right={<TextInput.Icon icon="eye" />} />

                    <Button icon="login" mode="contained" style={loginStyle.loginBtn} buttonColor='orangered' elevation={10}>
                        Login
                    </Button>

                    {/* CODE FOR NEW ACCOUNT */}
                    <Divider horizontalInset={true} bold={true} style={loginStyle.divider} />
                    <Text style={loginStyle.newAccount}>New User</Text>

                    <Button icon="account" mode="elevated" style={loginStyle.loginBtn} elevation={10} textColor='orangered'>
                        Create Account
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login
