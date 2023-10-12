import { React } from 'react'
import { View, StatusBar, Text, ScrollView } from 'react-native'
import { TextInput, Button, Divider,Menu } from 'react-native-paper';
import accountStyle from '../Style/Account.js'
function Account() {

    
    return (
        <View style={accountStyle.mainView}>
            <ScrollView>
                <StatusBar barStyle={'light-content'} backgroundColor="rgb(11,160,142)" />
                <Text style={accountStyle.brandName}>SHOPPSY</Text>

                {/* CODE FOR LOGIN COMPONENT */}
                <View style={accountStyle.loginView}>

                <TextInput label="Name" mode='outlined' outlineColor='black' activeOutlineColor='black' style={accountStyle.inputStyle} right={<TextInput.Icon icon="account" />} />


                    <TextInput label="Phone" mode='outlined' outlineColor='black' activeOutlineColor='black' style={accountStyle.inputStyle} right={<TextInput.Icon icon="phone" />} />

                    <TextInput label="Password" mode='outlined' outlineColor='black' activeOutlineColor='black' secureTextEntry style={accountStyle.inputStyle} right={<TextInput.Icon icon="eye" />} />

                    <Button mode="contained" style={accountStyle.loginBtn} buttonColor='orangered' elevation={10}>
                        Create
                    </Button>

                    {/* CODE FOR NEW ACCOUNT */}
                    <Divider horizontalInset={true} bold={true} style={accountStyle.divider} />
                    <Text style={accountStyle.newAccount}>Already Account </Text>

                    <Button icon="login" mode="elevated" style={accountStyle.loginBtn} elevation={10} textColor='orangered'>
                        Login Account
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}

export default Account;
