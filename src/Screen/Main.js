import { React, useState } from 'react'
import { View, StatusBar, Text, FlatList } from 'react-native'
import { Appbar, Avatar, Badge, IconButton, MD3Colors, Button, Portal, Modal, TextInput } from 'react-native-paper';
import mainStyle from '../Style/Main';



function Main() {

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [rewardVisible, setRewardVisible] = useState(false);

    const showRewardModal = () => setRewardVisible(true);
    const hideRewardModal = () => setRewardVisible(false);


    // code for demo data
    const demoData = [
        {
            itemPrice: 900,
            date: '23/05/23'
        },
        {
            itemPrice: 1500,
            date: '24/05/23'
        },
        {
            itemPrice: 2000,
            date: '28/05/23'
        },
        {
            itemPrice: 300,
            date: '30/05/23'
        }
    ]


    return (
        <View style={mainStyle.mainView}>
            <StatusBar backgroundColor="rgb(223,80,19)" />
            {/* CODE FOR THREE MENU */}
            <Appbar.Header style={mainStyle.bgCommon}>
                <Appbar.Action icon="menu" onPress={() => { }} style={mainStyle.menuStyle} color='white' />
            </Appbar.Header>

            {/* CODE FOR SHOWING THE BILL */}
            <View style={mainStyle.billSectionView}>
                <View style={mainStyle.TitleSectionView}>
                    <Text style={mainStyle.recentBillTxt}>Recent Bills</Text>
                    <View>
                        <Avatar.Icon size={26} icon="bell" style={{ backgroundColor: 'rgb(11,160,142)' }} />
                        <Badge style={mainStyle.badgeNotify} size={18}>3</Badge>
                    </View>
                </View>
                {/* CODE FOR SHOWING THE BILL DATA */}

                <FlatList
                    data={demoData}
                    renderItem={({ item }) => (
                        <View style={mainStyle.flatListStyle}>
                            <Text>INR {item.itemPrice}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    )}
                />


                {/* CODE FOR EXPANDING THE BILL */}
                <IconButton
                    icon="chevron-down"
                    mode='contained-tonal'
                    iconColor={MD3Colors.information50}
                    size={25}
                    style={mainStyle.downArrow} containerColor='rgb(235, 178, 157)'
                />
                <Text style={mainStyle.billAmount}>Total Amount : INR 4700</Text>

            </View>

            {/* CODE FOR BUTTONS */}
            <View style={mainStyle.referalRewardView}>
                <Button icon="share" mode="contained" onPress={showModal} style={{ borderRadius: 3, width: '40%', backgroundColor: "rgb(11,160,142)", elevation: 5 }} >
                    Referal
                </Button>

                <Button icon="trophy" mode="contained" style={{ borderRadius: 3, marginLeft: 10, width: '40%', backgroundColor: "rgb(11,160,142)", elevation: 5 }}>
                    Reward Points
                </Button>

            </View>
            <Button icon="calculator" mode="elevated" textColor='orangered' onPress={showRewardModal} style={mainStyle.setDiscount}>
                Set Discount
            </Button>

            {/* CODE FOR REFERAL PORTAL MODAL */}
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={mainStyle.modalContainerStyle}>
                    <Text style={mainStyle.refralCodeTxtHead}>Referal Code</Text>

                    <View style={mainStyle.referalView}>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>skshopsyredd887</Text>
                        <IconButton mode='contained-tonal' icon="content-copy" iconColor={MD3Colors.error50} size={25} />

                    </View>

                    <Text style={{ marginTop: 10, color: "white", textAlign: 'center', fontSize: 18, }}>Share On</Text>
                    <View style={mainStyle.socialView}>
                        <IconButton mode='contained-tonal' icon="whatsapp" iconColor={"green"} size={25} />

                        <IconButton mode='contained-tonal' icon="email" iconColor={MD3Colors.error50} size={25} />

                        <IconButton mode='contained-tonal' icon="skype" iconColor={"rgb(47, 47, 237)"} size={25} />
                    </View>

                </Modal>
            </Portal>

            {/* CODE FOR DISCOUNT PORTAL MODAL */}
            <Portal>
                <Modal visible={rewardVisible} onDismiss={hideRewardModal} contentContainerStyle={mainStyle.modalContainerStyleDiscount}>

                    <Text style={mainStyle.discountCodeTxtHead}>Set Discount</Text>
                    <TextInput label="Discount" mode='outlined' cursorColor="orangered" activeOutlineColor='orangered' outlineColor="black" textColor={"black"} />

                    {/* CODE FOR BUTTON */}
                    <Button icon="send" mode="contained" style={mainStyle.setDiscountBtn}>
                        Set Discount
                    </Button>
                </Modal>
            </Portal>
        </View>


    )
}

export default Main
