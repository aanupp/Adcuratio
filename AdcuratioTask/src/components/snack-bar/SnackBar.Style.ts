import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  SnackBarContainter: {
    position: 'absolute',
    backgroundColor: Colors.reddishPinkColor,
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    bottom: 10,
    right: 0,
    height: 50,
    paddingLeft: 10,
    paddingRight: 55,
    zIndex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },

  SnackBarMessage: {
    color: Colors.whiteColor,
    fontSize: 15,
    fontFamily: 'Comfortaa-Light',
    flex: 1,
  },
  snacBarErrorImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.primaryThemeColor,
  },
});

export default styles;
