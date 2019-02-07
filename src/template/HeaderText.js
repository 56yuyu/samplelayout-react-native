import React, { Component } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  Image,
  Text,
  Platform
} from "react-native";
import GlobalStyle from "../style/GlobalStyle";
import NoConnectionView from "./NoConnection";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class HeaderText extends Component {

  _onRefresh = () => {};

  render() {

    return (
      <View style={{ backgroundColor: GlobalStyle.red }}>
        <StatusBar
          backgroundColor={GlobalStyle.red}
          barStyle="light-content"    
        />
        
        <NoConnectionView />

        {Platform.OS == "ios" && <View style={{ height: 20 }} />}
        <View style={[GlobalStyle.topbar_view, { alignContent: 'flex-start' }]}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>{'Sample Menu'}</Text>
        </View>
      </View>
    );
  }
}