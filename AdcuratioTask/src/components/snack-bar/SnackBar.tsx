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
        {backgroundColor: props?.color ? props?.color : null},
      ]}>
      <Image
        source={props?.source}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
          marginRight: 10,
        }}
      />
      <Text
        numberOfLines={1}
        style={[
          styles.SnackBarMessage,
          {color: props?.textColor ? props?.textColor : null},
        ]}>
        {props.message}
      </Text>
    </View>
  ) : null;
}

export default memo(SnackBar);
