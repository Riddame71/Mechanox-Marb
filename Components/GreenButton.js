import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const GreenButton = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.touchable} onPress={props.press}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  buttonview: {
    backgroundColor: 'green',
  },
  touchable: {
    alignItems: 'center',
    width: responsiveWidth(76.5),
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    fontSize: responsiveFontSize(2),
    backgroundColor: 'darkgreen',
    paddingHorizontal: responsiveWidth(12),
    borderRadius: 35,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(10),
  },
});
