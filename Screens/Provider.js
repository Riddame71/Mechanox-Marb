import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import TextComp from '../Components/TextComp';
import RatingFeature from '../Components/RatingFeature';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Footer from '../Components/Footer';
const Provider = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Header text="MECHANOX" icon="md-menu-sharp" />
        <View style={{paddingVertical: responsiveHeight(2)}}>
          <TextComp
            texttop="Available Providers"
            textbottom="For AC Replacement Service"
          />
        </View>
        <View>
          <RatingFeature />
        </View>
      </ScrollView>
      <View>
        <Footer text="Help and support center" />
      </View>
    </SafeAreaView>
  );
};
export default Provider;
