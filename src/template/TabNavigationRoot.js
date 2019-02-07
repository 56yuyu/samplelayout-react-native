import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    BackHandler,
    Alert,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import GlobalStyle from '../style/GlobalStyle';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class TabNavigatorRoot extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    gotoHomePage() {
        this.props.navigation.navigate('Home');
    }

    gotoCategoryPage() {
        this.props.navigation.navigate('Category');
    }

    gotoVideoPage() {
        this.props.navigation.navigate('Video');
    }

    gotoAccountPage() {
        this.props.navigation.navigate('Account');

        // if (this.props.emailUser && this.props.passwordUser) {
        //     this.props.navigation.navigate('Account');
        // } else {
        //     this.props.navigation.navigate('LoginScreen');
        // }
    }

    render() {
        const {
            navigation
        } = this.props;

        const {
            routes
        } = navigation.state;

        const focused = navigation.state.index;
        return (
            <View style={{ height: 60, width: width, flexDirection: 'row', alignItems: 'center', backgroundColor: GlobalStyle.red }}>
                {
                    //Menu Section 1
                }
                <TouchableWithoutFeedback
                    onPress={() => this.gotoHomePage()}
                >
                    <View style={{ flexDirection: 'column', flex: 0.34, alignItems: 'center', backgroundColor: focused === 0 ? 'rgba(0,0,0,0.5)' : 'transparent', height: 60, justifyContent: 'center' }}>
                        <Image style={{ width: 35, height: 35, tintColor: 'white', alignSelf: 'center' }} resizeMode="stretch" source={require('../assets/icon/ic_help_white.png')} />
                        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: GlobalStyle.fontFamily, fontSize: 12, color: 'white' }}>Home</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    //Menu Section 2
                }
                <TouchableWithoutFeedback

                    onPress={() => this.gotoCategoryPage()}
                >
                    <View style={{ flexDirection: 'column', flex: 0.34, alignItems: 'center', backgroundColor: focused === 1 ? 'rgba(0,0,0,0.5)' : 'transparent', height: 60, justifyContent: 'center' }}>
                        <Image style={{ width: 35, height: 35, tintColor: 'white', alignSelf: 'center' }} resizeMode="stretch" source={require('../assets/icon/ic_help_white.png')} />
                        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: GlobalStyle.fontFamily, fontSize: 12, color: 'white' }}>Kategori</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    //Menu Section 3
                }
                <TouchableWithoutFeedback
                    onPress={() => this.gotoVideoPage()}
                >
                    <View style={{ flexDirection: 'column', flex: 0.34, alignItems: 'center', backgroundColor: focused === 2 ? 'rgba(0,0,0,0.5)' : 'transparent', height: 60, justifyContent: 'center' }}>
                        <Image style={{ width: 30, height: 30, tintColor: 'white', alignSelf: 'center' }} resizeMode="stretch" source={require('../assets/icon/ic_help_white.png')} />
                        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: GlobalStyle.fontFamily, fontSize: 12, color: 'white' }}>Video</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    //Menu Section 4
                }
                <TouchableWithoutFeedback
                    onPress={() => this.gotoAccountPage()}
                >
                    <View style={{ flexDirection: 'column', flex: 0.34, alignItems: 'center', backgroundColor: focused === 3 || focused === 4 ? 'rgba(0,0,0,0.5)' : 'transparent', height: 60, justifyContent: 'center' }}>
                        <Image style={{ width: 30, height: 30, tintColor: 'white', alignSelf: 'center' }} resizeMode="stretch" source={require('../assets/icon/ic_help_white.png')} />
                        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: GlobalStyle.fontFamily, fontSize: 12, color: 'white' }}>My Account</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default TabNavigatorRoot;