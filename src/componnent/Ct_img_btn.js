import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const Ct_img_btn = ({navigation, img, title, pressFunc}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate(pressFunc)}>
      <Image source={img} style={{width: 90, height: 70}} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18, // Specify font size
          marginTop: 10,
          color: 'black',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: width * 0.3,
    height: width * 0.45,
    // backgroundColor: 'transparent',
    // borderRadius: 20
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00a651',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    color: 'black',
  },
});

export default Ct_img_btn;
