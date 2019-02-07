import React, { Component } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  Image,
  Platform
} from "react-native";
import GlobalStyle from "../style/GlobalStyle";
import NoConnectionView from "./NoConnection";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class HeaderMenu extends Component {

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
        <View style={[GlobalStyle.topbar_view, { justifyContent: "center" }]}>
          <Image
            source={require("../assets/img/app_logo.png")}
            style={{
              resizeMode: "contain",
              width: width / 2,
              height: 50,
              alignSelf: "center"
            }}
          />
        </View>
      </View>
    );
  }
}