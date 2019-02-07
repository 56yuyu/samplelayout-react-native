import { Dimensions, Platform } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const blue = '#065ca9';
const red = '#E44C41';
const orange = '#ff8000';
const white = '#FFFFFF';
const lightGray = '#989898';
const black = "#000000";

const fontFamily = 'Roboto-Light';

module.exports = {
    blue,
    red,
    black,
    orange,
    white,
    lightGray,
    fontFamily,

    fill: { flex: 1, backgroundColor: 'white' },
    fillLightGray: { flex: 1, backgroundColor: '#f1f1f1' },

    overlayModal: { 
        backgroundColor: '#fff', 
        padding: 10, 
        marginHorizontal: 20,
        minWidth: width - 20, 
        minHeight: height / 2, 
        borderRadius: 15, 
        justifyContent: 'center',
    },

    // Header
      topbar_view: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: red,
        justifyContent: 'space-between',
        shadowColor: lightGray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6
      },
      topbar_header_view: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
      },
      topbar_back: {
        flexDirection: 'row',
        height: 60, width: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
      topbar_title_text: {
        fontFamily: "Roboto-Light",
        fontSize: 17,
        letterSpacing: 0.5,
        color: black,
      },
      icon: {
        color: black,
        alignItems: 'center',
        justifyContent: 'center',
      },
}