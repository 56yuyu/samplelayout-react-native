/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import GlobalStyle from '../style/GlobalStyle';
import HeaderMenu from '../template/HeaderText';
import { Container, Content, Button, Toast, Spinner, Card } from "native-base";

const instructions = Platform.select({
  ios: 'Welcome to account Iphone',
  android:
    'Welcome to account Android'
});

export default class Account extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "white", justifyContent: "space-between" }}>
        <StatusBar
          backgroundColor={GlobalStyle.blue}
          barStyle="light-content"
        />
        <HeaderMenu onRedirectscreen={this.redirectToScreen} />
        
        <View style={styles.container}>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  },
});