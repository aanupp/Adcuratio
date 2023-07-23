import React, {memo, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './SnackBar.Style';

interface ISnackBarProps {
  showSnackBar: boolean;
  removeErrorState: () => void;
  message: string;
  color: string;
  source: any;
  textColor: string;
}
function SnackBar(props: ISnackBarProps) {
  let timerID: any;

  useEffect(() => {
    if (props.showSnackBar) {
      hide();
    }
  }, [props.showSnackBar]);

  const hide = () => {
    timerID = setTimeout(() => {
      props.removeErrorState();
    }, 3000);
  };

  return props.showSnackBar ? (
    <View
      style={[
        styles.SnackBarContainter,
        {
          backgroundColor: props?.color
            ? props?.color
            : styles.SnackBarContainter.backgroundColor,
        },
      ]}>
      <Image source={props?.source} style={styles.snacBarErrorImage} />
      <Text
        numberOfLines={1}
        style={[
          styles.SnackBarMessage,
          {
            color: props?.textColor
              ? props?.textColor
              : styles.SnackBarMessage.color,
          },
        ]}>
        {props.message}
      </Text>
    </View>
  ) : null;
}

export default memo(SnackBar);
