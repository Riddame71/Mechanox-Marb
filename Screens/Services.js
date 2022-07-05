import {View, SafeAreaView, ScrollView, LogBox} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import TextComp from '../Components/TextComp';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Dropdown from '../Components/Dropdown';
import GreenButton from '../Components/GreenButton';
import Footer from '../Components/Footer';
let AC = [
  {id: 1, name: 'AC Repair'},
  {id: 2, name: 'Replacement'},
  {id: 3, name: 'AC Check-Up'},
];
let Battery = [
  {id: 1, name: 'Battery Repair'},
  {id: 2, name: 'Replacement'},
  {id: 3, name: 'Battery Check-Up'},
];
let Brake = [
  {id: 1, name: 'Brake Repair'},
  {id: 2, name: 'Replacement'},
  {id: 3, name: 'Brake Check-Up'},
];
const Services = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const [selectedItem2, setSelectedItem2] = useState(null);
  const onSelect2 = item => {
    setSelectedItem2(item);
  };
  const [selectedItem3, setSelectedItem3] = useState(null);
  const onSelect3 = item => {
    setSelectedItem3(item);
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Header text="MECHANOX" icon="md-menu-sharp" />
        <View style={{paddingVertical: responsiveHeight(2)}}>
          <TextComp texttop="Choose a Service" />
        </View>
        <View style={{marginVertical: responsiveHeight(3.5)}}>
          <Dropdown
            Data={AC}
            onSelect={onSelect}
            Value={selectedItem}
            initialvalue="AC Services"
            icon="Fan-out"
            iconin="https://img.icons8.com/ios/50/000000/fan-speed--v2.png"
            iconout="https://img.icons8.com/ios-filled/50/000000/fan-speed--v2.png"
          />
        </View>
        <View style={{marginBottom: responsiveHeight(3.5)}}>
          <Dropdown
            Data={Battery}
            onSelect={onSelect2}
            Value={selectedItem2}
            initialvalue="Battery Services"
            iconin="https://img.icons8.com/ios/50/000000/car-battery.png"
            iconout="https://img.icons8.com/ios-filled/50/000000/car-battery.png"
          />
        </View>
        <View style={{marginBottom: responsiveHeight(3.5)}}>
          <Dropdown
            Data={Brake}
            onSelect={onSelect3}
            Value={selectedItem3}
            initialvalue="Brake Services"
            iconin="https://img.icons8.com/ios/50/000000/brake-pedal.png"
            iconout="https://img.icons8.com/ios-filled/50/000000/brake-pedal.png"
          />
        </View>
        <View style={{marginVertical: responsiveHeight(8)}}>
          <GreenButton
            text="See Available Providers"
            press={(onPress = () => navigation.navigate('Provider'))}
          />
        </View>
      </ScrollView>
      <View>
        <Footer text="Help and support center" />
      </View>
    </SafeAreaView>
  );
};
export default Services;
