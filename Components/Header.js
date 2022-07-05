import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Header = props => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.headerview}>
        <View style={styles.iconview}>
          <TouchableOpacity>
            <Ionicons name={props.icon} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.textview}>
          <Text style={styles.headertext}>{props.text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: 'white',
    paddingVertical: responsiveHeight(2),
  },
  headerview: {
    flexDirection: 'row',
    padding: responsiveHeight(1),
  },
  iconview: {
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 0.2,
    justifyContent: 'center',
  },
  textview: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingRight: responsiveWidth(1),
  },
  icon: {
    color: 'black',
    fontSize: responsiveFontSize(6),
  },
  headertext: {
    fontSize: responsiveFontSize(4),
    color: 'black',
    fontFamily: 'Roboto-Black',
    letterSpacing: responsiveFontSize(0.3),
    paddingRight: responsiveWidth(12),
  },
});
