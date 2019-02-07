// import dateFormat from "dateformat";
import { Toast } from "native-base";
// import { Analytics, Hits } from 'react-native-google-analytics';
// import DeviceInfo from 'react-native-device-info';

// const clientId = DeviceInfo.getUniqueID();
// const trackingId = 'UA-66027512-4';
// const userAgent = DeviceInfo.getUserAgent();
// const analyticsVersion = 1;
// const appName = 'TunasFriend';
// const appVersion = '2.1';

module.exports = {
  osDeviceId: '',
  connectionStatus: true,
  
  headers() {
    return {}
  },

  ScreenTracker(screenName) {
    // this.GAScreenTracker(screenName);
  },

  EventTracker(category, action, label, value) {
    // this.GAEventTracker(category, action, label, value);
  },

  GAScreenTracker(screenName) {
    // let userAgents = this.replaceNullToEmpty(userAgent) == "" ? "User Agent Undefined" : userAgent;
    // let tracker = new Analytics(trackingId, clientId, analyticsVersion, userAgents);

    // let screenView = new Hits.ScreenView(
    //   appName,
    //   'TunasFriend - ' + screenName,
    //   appVersion,
    //   DeviceInfo.getReadableVersion(),
    //   DeviceInfo.getBundleId()
    // )
    // tracker.send(screenView)
    // this.GAEventTracker(screenName, 'Open ' + screenName + ' Page', screenName)
  },

  GAEventTracker(category, action, label) {
    // let value = 1;
    // let userAgent = this.replaceNullToEmpty(userAgent) == "" ? "User Agent Undefined" : userAgent;
    // let labelTemp = this.replaceNullToEmpty(label);
    
    // if (this.replaceNullToEmpty(label) == '') {
    //   label = action + " - " + category;
    // } else {
    //   label = action + " - " + category + " | " + label;
    // }
    // let tracker = new Analytics(trackingId, clientId, analyticsVersion, userAgent)

    // let event = new Hits.Event(
    //   category != '' ? category : 'Not Registered',
    //   'TunasFriend - ' + action,
    //   label,
    //   value
    // )
    // tracker.send(event)
  },

  replaceNullToEmpty(value) {
    if (value == undefined) {
      value = ''
    }

    value = JSON.parse(JSON.stringify(value).replace(/null/g, '""'))

    return value;
  },

  connectionAvailability() {
    console.log(this.connectionStatus)
    if (this.connectionStatus) {
      return true;
    } else {
      Toast.show({
        text: 'No Connection !',
        position: 'bottom',
        buttonText: 'Okay',
        type: 'danger'
      })
      return false;
    }
  },

  _validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  addCommasOnly(intNum) {
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  },

  formatDateToDisplay(date) {
    // var dateFormatted = '';
    // if (date != "" && date != "0000-00-00")
    //   dateFormatted = dateFormat(date, "dd mmm yyyy");
    // else {
    //   dateFormatted = "";
    // }
    // return dateFormatted;
  },

  setDeviceOneSIgnal(deviceId, tags) {
    var body = JSON.stringify({
      "app_id": "1a924220-1135-45d2-9fce-6df220ebfbd0",
      "tags": tags
    })

    fetch('https://onesignal.com/api/v1/players/' + deviceId, {
      method: 'PUT',
      dataType: 'json',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic Y2MxNmUwZGEtM2EwYy00MjY3LTk5MWMtYmFmMTVhNDZkZTVl"
      },
      body: body
    }).then(response => {
      response.json().then(data => {

      });
    })
  },

  sendNotification(body) {
    var postBody = JSON.stringify(body)
    fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      dataType: 'json',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic Y2MxNmUwZGEtM2EwYy00MjY3LTk5MWMtYmFmMTVhNDZkZTVl"
      },
      body: postBody
    }).then(response => {
      response.json().then(data => {
        
      });
    })
  },

  deleteNotification(notification_id) {
    fetch(`https://onesignal.com/api/v1/notifications/${notification_id}?app_id=1a924220-1135-45d2-9fce-6df220ebfbd0`, {
      method: 'POST',
      dataType: 'json',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic Y2MxNmUwZGEtM2EwYy00MjY3LTk5MWMtYmFmMTVhNDZkZTVl"
      },
    }).then(response => {
      response.json().then(data => {
        if (data.success) {
          Toast.show({
            text: 'Kajian Dihapus Dari Simpanan',
            position: 'bottom',
            duration: 3000,
            type: 'success',
            buttonText: 'Okay'
          })
        }
      });
    })
  },


}