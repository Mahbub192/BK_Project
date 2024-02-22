// import React from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// export default function Service(props) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.images}>
//         {/* //হাসপাতাল */}

//         <TouchableOpacity
//           style={styles.imageContainer}
//           onPress={() => props.navigation.navigate('Hospital')}>
//           <Image
//             style={styles.logo}
//             source={require('../assets/images/service/hospital.png')}
//           />
//           <Text style={styles.textStyle}>হাসপাতাল</Text>
//         </TouchableOpacity>

//         {/* পুলিশ */}

//         <TouchableOpacity style={styles.imageContainer}>
//           <Image
//             style={styles.logo}
//             source={require('../assets/images/service/police.png')}
//           />
//           <Text style={styles.textStyle}>পুলিশ</Text>
//         </TouchableOpacity>

//         {/* ফায়ার সার্ভিস */}

//         <TouchableOpacity style={styles.imageContainer}>
//           <Image
//             style={styles.logo}
//             source={require('../assets/images/service/FireService.png')}
//           />
//           <Text style={styles.textStyle}>ফায়ার সার্ভিস</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   images: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 10,
//   },
//   imageContainer: {
//     paddingTop: 10,
//     // paddingBottom: 16,
//     // paddingRight: 5,
//     // paddingLeft: 5,
//     alignItems: 'center',
//     // backgroundColor: '#D3D3D3',
//     borderRadius: 8,
//     borderColor: 'red',
//     borderWidth: 1,

//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 2.84,
//     elevation: 5,
//     backgroundColor: '#fff',
//     width: 95,
//   },
//   logo: {
//     width: 70,
//     height: 70,
//   },
//   textStyle: {
//     fontSize: 18, // Specify font size
//     marginTop: 10,
//     fontWeight: '500',
//     color: 'black',
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');
const hospital = require('../assets/images/service/hospital.png');
const dental = require('../assets/images/service/police.png');
const therapy = require('../assets/images/service/FireService.png');
const apt_ttl = require('../assets/images/service/emergency.jpg');

const Service = props => {
  return (
    <View style={styles.apt_section}>
      <View style={styles.apt_label_vw}>
        <Image source={apt_ttl} style={styles.apt_label_vw_img} />
        <Text style={{fontSize: 20, color: 'indianred', fontWeight: 500}}>
          জরুরী সেবা
        </Text>
      </View>
      <View style={styles.apt_clickable}>
        <TouchableOpacity
          style={styles.apt_clickable_el}
          onPress={() => props.navigation.navigate('Hospital')}>
          {/* <ImageBackground source={hospital} resizeMode="center" style={styles.image}/> */}
          <Image source={hospital} style={styles.image} />
          <Text style={styles.textStyle}>হাসপাতাল</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.apt_clickable_el}
          onPress={() => props.navigation.navigate('Police')}>
          {/* <ImageBackground source={dental} resizeMode="center" style={styles.image}/> */}
          <Image source={dental} style={styles.image} />
          <Text style={styles.textStyle}>পুলিশ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.apt_clickable_el}
          onPress={() => props.navigation.navigate('FireService')}>
          {/* <ImageBackground source={therapy} resizeMode="center" style={styles.image}/> */}
          <Image source={therapy} style={styles.image} />
          <Text style={styles.textStyle}>ফায়ার সার্ভিস</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  apt_section: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  apt_label_vw: {
    borderWidth: 2,
    flex: 1,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 6,
    borderColor: '#00a651',
    borderRadius: 10,
    position: 'relative',
  },
  apt_label_vw_img: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: -13,
    top: 2,
    borderWidth: 2,
    borderColor: '#00a651',
    borderRadius: 20,
  },
  apt_clickable: {
    width: width,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    alignItems: 'start',
  },
  apt_clickable_el: {
    width: width * 0.3,
    // backgroundColor: 'transparent',
    // borderRadius: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 2,
    // // backgroundColor: 'red'
    // // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 10,
    //   height: 15,
    // },
    // backgroundColor:'gray',
    // // shadowOpacity: 0.17,
    // shadowRadius: 3.05,
    // elevation: 4,

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
    // width: 95,
  },
  image: {
    borderRadius: 15,
    width: width * 0.22,
    height: width * 0.22,
  },
  textStyle: {
    fontSize: 18, // Specify font size
    marginTop: 10,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 10,
    color: 'black',
  },
});
