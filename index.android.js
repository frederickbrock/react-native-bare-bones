/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var PUBNUB = require('pubnub');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    var pubnub = PUBNUB.init({'cipher_key' : 'demo', 'publish_key' : 'demo', 'subscribe_key' : 'demo'});
    //pubnub.publish({'channel' : 'axz', 'message' : 'hi from react', 'callback' : console.log, 'error' : console.log});
    pubnub.subscribe({
	'channel' : 'a',
        'callback' : function(r) {
             ToastAndroid.show(JSON.stringify(r), ToastAndroid.SHORT);
        },
        'error' : function(r) {
             ToastAndroid.show(JSON.stringify(r), ToastAndroid.SHORT);
        },
        'connect' : function(r) {
            ToastAndroid.show('CONNECT on ' + r, ToastAndroid.SHORT);
        },
        'disconnect' : function(r) {
            ToastAndroid.show('DISCONNECT on ' + r, ToastAndroid.SHORT);
        },
        'reconnect' : function(r) {
            ToastAndroid.show('RECONNECT on ' + r, ToastAndroid.SHORT);
        },


    });

    //ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
