import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Service(props) {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        {/* //হাসপাতাল */}

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => props.navigation.navigate('Hospital')}>
          <Image
            style={styles.logo}
            source={require('../assets/images/service/hospital.png')}
          />
          <Text style={styles.textStyle}>হাসপাতাল</Text>
        </TouchableOpacity>

        {/* পুলিশ */}

        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/service/police.png')}
          />
          <Text style={styles.textStyle}>পুলিশ</Text>
        </TouchableOpacity>

        {/* ফায়ার সার্ভিস */}

        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/service/FireService.png')}
          />
          <Text style={styles.textStyle}>ফায়ার সার্ভিস</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  imageContainer: {
    paddingTop: 10,
    // paddingBottom: 16,
    // paddingRight: 5,
    // paddingLeft: 5,
    alignItems: 'center',
    // backgroundColor: '#D3D3D3',
    borderRadius: 8,
    borderColor: 'red',
    borderWidth: 1,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2.84,
    elevation: 5,
    backgroundColor: '#fff',
    width: 95,
  },
  logo: {
    width: 70,
    height: 70,
  },
  textStyle: {
    fontSize: 18, // Specify font size
    marginTop: 10,
    fontWeight: '500',
  },
});
