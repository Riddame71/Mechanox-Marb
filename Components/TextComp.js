import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const TextComp = props => {
  return (
    <View style={styles.TopView}>
      <View style={styles.TextView}>
        <Text style={[styles.Text, {fontSize: responsiveFontSize(4.3)}]}>
          {props.texttop}
        </Text>
      </View>
      <View style={styles.TextView}>
        <Text
          style={[
            styles.Text,
            {
              fontSize: responsiveFontSize(2.3),
              fontFamily: 'Roboto-Regular',
            },
          ]}>
          {props.textbottom}
        </Text>
      </View>
    </View>
  );
};
export default TextComp;
const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  TopView: {alignItems: 'center'},
  TextView: {},
});
