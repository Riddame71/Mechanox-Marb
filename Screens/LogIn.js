import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import TextComp from '../Components/TextComp';
import Footer from '../Components/Footer';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [eye, setEye] = useState(true);

  return (
    <SafeAreaView style={styles.safeareview}>
      <ScrollView style={{flex: 1}}>
        <Header text="MECHANOX" />
        <View style={{paddingVertical: responsiveHeight(3)}}>
          <TextComp texttop="Log In" />
        </View>
        <View>
          <TextInput
            style={styles.input2}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
        </View>
        {eye ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              marginTop: responsiveHeight(2),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <TouchableOpacity onPress={() => setEye(!eye)}>
              <Entypo
                name="eye-with-line"
                color={'white'}
                size={responsiveFontSize(3.5)}
                style={{
                  paddingLeft: responsiveWidth(3),
                }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              marginTop: responsiveHeight(2),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity onPress={() => setEye(!eye)}>
              <Entypo
                name="eye"
                color={'white'}
                size={responsiveFontSize(3.5)}
                style={{
                  paddingLeft: responsiveWidth(3),
                }}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={{height: responsiveHeight(15)}}></View>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() => navigation.navigate('Services')}>
          <View style={styles.TouchableView}>
            <Text style={styles.text}>Log In </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.TouchableView}>
            <Text style={[styles.text]}>Sign Up </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.logotext}>
          <Text style={{color: 'white', fontSize: responsiveFontSize(1.5)}}>
            Or Sign Up using one of the options below
          </Text>
        </View>
        <View style={styles.login}>
          <TouchableOpacity>
            <AntDesign
              name="google"
              color={'white'}
              size={responsiveFontSize(4.5)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="facebook-square"
              color={'white'}
              size={responsiveFontSize(4.5)}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer text="Welcome to Mechanox" />
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  safeareview: {
    backgroundColor: 'black',
    flex: 1,
  },
  input: {
    width: responsiveWidth(85),
    paddingHorizontal: responsiveWidth(2),
    borderColor: 'white',
  },
  input2: {
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(2),
    borderColor: 'white',
  },
  TouchableView: {alignItems: 'center'},
  text: {fontSize: responsiveFontSize(2.7)},
  Touchable: {
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(20),
    borderRadius: 20,

    borderWidth: 1.5,
    borderColor: 'white',
    paddingVertical: responsiveHeight(0.5),
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logotext: {alignItems: 'center', marginVertical: responsiveHeight(2)},
  checkbox: {
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
