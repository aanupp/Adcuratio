import {StyleSheet} from 'react-native';
import Colors from '../resources/Colors';

const tabNavigatorStyles = StyleSheet.create({
  tabBar: {
    height: 60,
    elevation: 4,
    backgroundColor: Colors.primaryBlueColor,
    position: 'relative',
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
export default tabNavigatorStyles;
