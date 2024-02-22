import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ct_employee from '../componnent/Ct_employee';

let img = require('../assets/police/police.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Police_list(props) {
  const doctorList = [
    {
      id: 1,
      doctorName: 'মোহাম্মদ আবদুল আহাদ খান',
      title: 'ভারপাপ্ত কর্মকর্তা ( ওসি )',
      mobileNumber: '০১৩২০১০৫৩৩৫',
      officeNumber: '০১৩২০১০৫৩৩৫',
    },
    {
      id: 2,
      doctorName: 'সঞ্জয় কুমার সাহা',
      title: 'পুলিশ পরিদর্শক (তদন্ত)',
      mobileNumber: '০১৩২০১০৫৩৩৬',
      officeNumber: '০১৩২০১০৫৩৩৬',
    },
    {
      id: 3,
      doctorName: 'তারেক মোহাম্মদ মাসুদ',
      title: 'এসআই (নি:)',
      mobileNumber: '০১৭১৯৭৮৯৫৪২',
      officeNumber: '০১৭১৯৭৮৯৫৪২',
    },
    {
      id: 4,
      doctorName: 'মোঃ আবু সাঈদ',
      title: 'এসআই (নি:)',
      mobileNumber: '০১৬২১৭৭৮১৫৬',
      officeNumber: '০১৬২১৭৭৮১৫৬',
    },
    {
      id: 5,
      doctorName: 'পারভেজ রানা',
      title: 'কনস্টেবল (কম্পিউটার অপারেটর)',
      mobileNumber: '০১৯১৯৭৪৫৩৬২',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />
      <View style={styles.contentContainer}>
        <View style={styles.takesewrvice}>
          <Text style={styles.Taketext}>পুলিশ স্টেশন</Text>
          <Text style={styles.Taketext}>সেবা নিন</Text>
        </View>
        <View style={styles.takesewrviceImg}>
          <Image source={img} style={styles.img} />
        </View>
      </View>
      <View style={styles.curveContainer}>
        <View style={styles.curve}>
          <View>
            <Text style={styles.Service}>
              {' '}
              কর্মকর্তাবৃন্দ, তালিকা এবং ফোন নম্বর
            </Text>
          </View>
          <ScrollView style={{backgroundColor: '#CCCCFF'}}>
            {doctorList.map(singleDoctor => (
              <Ct_employee singleDoctor={singleDoctor}></Ct_employee>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  textContainer: {
    marginTop: 10,
  },
  takesewrvice: {
    flex: 1,
    backgroundColor: '#6495ED',
    paddingTop: 30,
    paddingLeft: 25,
  },
  Taketext: {
    color: 'white',
    fontSize: 25,
  },
  takesewrviceImg: {
    flex: 1,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  curveContainer: {
    marginTop: 0,
  },
  curve: {
    width: '100%',
    height: 550,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
  },
  Service: {
    margin: 30,
    color: '#5D3587',
    fontWeight: '600',
    fontFamily: 'nunito-regular',
    fontSize: 20,
    textAlign: 'center',
  },
});
