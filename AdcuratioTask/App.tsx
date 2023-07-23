/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigation';
import Colors from './src/resources/Colors';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.primaryThemeColor}
        />
        <View style={styles.container}>
          <TabNavigator />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {flex: 1, backgroundColor: Colors.primaryThemeColor},
  container: {flex: 1},
});

export default App;
