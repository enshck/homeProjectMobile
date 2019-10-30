/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import Routes from './src/Routes';

const App = () => {
  return (
    <>
      <Routes />
      {/* <StatusBar barStyle="dark-content" />
      <View style={styles.topContainer}>
        <Text>Hello</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('123qwe')}
            title={'Click me'}
            style={styles.button}
            color="black"
          />
        </View>
      </View> */}
    </>
  );
};

// const styles = StyleSheet.create({
//   topContainer: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     marginTop: 40,
//   },
// });

export default App;
