import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Mechanics = [
  {
    id: 1,
    Name: 'Dohn Doe Mechanics',
    img: 'https://5.imimg.com/data5/QM/NE/FN/SELLER-80433852/lfg-service-center-visakapatnam-500x500.jpg',
    EstimatedCost: '142.00 USD',
    starss: 5,
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
  },
  {
    id: 2,
    Name: 'John Doe Mechanics',
    img: 'https://thearchitectsdiary.com/wp-content/uploads/2020/11/ac-repair-service-.jpg',
    EstimatedCost: '164.00 USD',
    starss: 5,
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
  },
  {
    id: 3,
    Name: 'Hero AC Mechanics',
    img: 'https://mydecorative.com/wp-content/uploads/2020/01/install-an-air-conditioning.jpg',
    EstimatedCost: '129.00 USD',
    starss: 5,
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
  },
  {
    id: 4,
    Name: 'United AC Mechanics',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1folFtkvXBquWbeHVwJo4bN9G-irxaujl54G6Zh5HDtADeZacs557K1HqpV7bdXOlLbw&usqp=CAU',
    EstimatedCost: '103.00 USD',
    Starss: 5,
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
  },
];
const RatingFeature = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          marginHorizontal: responsiveWidth(5),
          flex: 1,
        }}>
        <FlatList
          data={Mechanics}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginVertical: responsiveHeight(2),
                    backgroundColor: 'white',
                    borderRadius: 10,
                  }}>
                  <View>
                    <Image source={{uri: item.img}} style={styles.img} />
                  </View>
                  <View style={{paddingLeft: responsiveWidth(2)}}>
                    <Text style={styles.Heading}>{item.Name}</Text>
                    <Text style={styles.Para}>{item.description}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ReviewCost}>Reviews :</Text>
                      <AirbnbRating
                        count={5}
                        defaultRating={5}
                        size={responsiveFontSize(1.8)}
                        showRating={false}
                        isDisabled={true}
                      />
                    </View>
                    <View>
                      <Text style={styles.ReviewCost}>
                        Estimated Cost: {item.EstimatedCost}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default RatingFeature;
const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(15.1),
    width: responsiveWidth(30),
    borderRadius: 10,
  },
  Heading: {
    fontFamily: 'Roboto-Regular',
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontWeight: '700',
  },
  Para: {color: 'gray', width: responsiveWidth(46)},
  ReviewCost: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
  },
});
