import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  tabBarContainer: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
    paddingVertical: 15,
    borderTopColor: Colors.darkBlueMagentaColor,
    borderTopWidth: 2,
  },
  tabIconBtn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
    marginHorizontal: 5,
  },
  tabIcon: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
  },
});
export default styles;
