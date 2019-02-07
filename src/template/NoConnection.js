import React, { Component } from 'react';
import { View, StyleSheet, Text, NetInfo } from 'react-native';

import GlobalStyles from '../style/GlobalStyle';
import GlobalFunction from '../utils/GlobalFunction';
import { Icon, Toast } from 'native-base';

export default class NoConnectionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        }
    }

    componentDidMount() {
        this.setConnectionListener();
    }

    componentWillUnmount() {

    }

    setConnectionListener() {
        this.removeConnectionListener();
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                GlobalFunction.connectionStatus = isConnected;
                this.setState({ status: isConnected });
            }
        );
    }

    removeConnectionListener() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }

    handleConnectionChange = (isConnected) => {
        GlobalFunction.connectionStatus = isConnected;
        this.setState({ status: isConnected });
    }

    render() {
        return (
            <View>
                {this.state.status ? (
                    <View></View>
                ) : (
                        <View style={styles.no_connection_view}>
                            <Icon name='md-information-circle' style={styles.connection_image} />
                            <Text style={styles.text_connection}>Not connected to internet</Text>
                        </View>

                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    no_connection_view: {
        height: 20,
        backgroundColor: 'gray',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    connection_image: {
        color: GlobalStyles.colorIcon,
        alignSelf: 'center',
        marginRight: 5,
        fontSize: 15
    },
    text_connection: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 10,
        fontFamily: "Roboto"
    },

})

module.exports = NoConnectionView;