import React, {Fragment} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tabNavigatorStyles from './TabNavigator.Styles';
import TabBar from '../components/tab-bar/TabBar';
import Questions from '../screens/trending-questions/Questions';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Fragment>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [tabNavigatorStyles.tabBar],
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={props => <TabBar {...props} />}
        initialRouteName="React"
        backBehavior="initialRoute">
        <Tab.Screen name="React" children={props => <Questions {...props} />} />
        <Tab.Screen
          name="React-Native"
          children={props => <Questions {...props} />}
        />
        <Tab.Screen
          name="Node Js"
          children={props => <Questions {...props} />}
        />
      </Tab.Navigator>
    </Fragment>
  );
};
export default TabNavigator;
