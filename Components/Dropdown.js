import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Dropdown = ({
  Data = [],
  Value = {},
  onSelect = () => {},
  initialvalue,
  iconin,
  iconout,
}) => {
  const [Change, setChange] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const onSelectedItem = val => {
    setShowOptions(false);
    onSelect(val);
  };
  var icons = Change ? iconin : iconout;
  const IconColor = () => {
    setChange(!Change);
  };
  const Drop = () => {
    setShowOptions(!showOptions);
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[styles.dropDownStyle, {elevation: showOptions ? 10 : 0}]}
          onPress={() => {
            IconColor();
            Drop();
          }}>
          <Image source={{uri: icons}} style={styles.IconStyle} />
          <Text style={styles.TextStyle}>
            {!!Value ? Value?.name : initialvalue}
          </Text>
        </TouchableOpacity>
        {showOptions && (
          <View>
            {Data.map((Val, i) => {
              return (
                <View key={String(i)}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: responsiveWidth(20),
                      paddingVertical: responsiveHeight(1.5),
                      backgroundColor: 'white',
                      marginHorizontal: responsiveWidth(8),
                    }}
                    onPress={() => onSelectedItem(Val)}>
                    <FontAwesome name="circle" style={styles.MapIcon} />
                    <Text key={String(i)} style={styles.MapText}>
                      {Val.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};
export default Dropdown;
const styles = StyleSheet.create({
  container: {},
  dropDownStyle: {
    backgroundColor: 'white',
    paddingLeft: responsiveWidth(3.5),
    marginHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: responsiveFontSize(2.7),
    paddingLeft: responsiveWidth(8),
  },
  IconStyle: {width: responsiveWidth(10), height: responsiveHeight(5)},
  MapText: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: responsiveFontSize(2.7),
    paddingLeft: responsiveWidth(5),
  },
  MapIcon: {fontSize: 18, color: 'black'},
});
