import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const Footer = props => {
  return (
    <View style={styles.FooterView}>
      <Text style={styles.FooterText}>{props.text}</Text>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  FooterView: {
    height: responsiveHeight(10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FooterText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Regular',
    elevation: 20,
    shadowColor: 'gray',
  },
});
