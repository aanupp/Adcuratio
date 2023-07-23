import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import MediaAssets from '../../../assets';
import styles from './TabBar.Style';

const TabBar = props => {
  const {state, navigation} = props;
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = index === state.index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route?.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        let iconName;

        switch (route.name) {
          case 'React':
            iconName = MediaAssets.ic_react;
            break;
          case 'React-Native':
            iconName = MediaAssets.ic_react_native;
            break;
          case 'Node Js':
            iconName = MediaAssets.ic_node;
            break;
          default:
            break;
        }

        return (
          <TouchableOpacity
            style={styles.tabIconBtn}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Image source={iconName} style={styles.tabIcon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
