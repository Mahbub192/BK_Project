import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Ct_employee from '../componnent/Ct_employee';

let img = require('../assets/fireservice/fireservice.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function FireService_list(props) {
  const doctorList = [
    {
      id: 1,
      doctorName: 'মোঃ শাহ আলম',
      title: 'ফায়ারম্যান',
      mobileNumber: '০১৭২৬৭০৭৮৮৫',
    },
    {
      id: 2,
      doctorName: 'মোঃ মঞ্জু মিয়া',
      title: 'ফায়ারম্যান',
      mobileNumber: '০১৮২৮৭৯১৮৪৩',
    },
    {
      id: 3,
      doctorName: 'মোঃ মকুল মিয়া',
      title: 'ড্রাইভার',
      mobileNumber: '০১৬৮৯৬৮৯৪৩৩',
    },
    {
      id: 4,
      doctorName: 'মোঃ জীবন আহম্মেদ',
      title: '	ড্রাইভার',
      mobileNumber: '০১৭১৬৪৪৮৫১০',
    },
    {
      id: 5,
      doctorName: 'মোঃসাইফুল ইসলাম',
      title: 'ড্রাইভার',
      mobileNumber: '০১৯২৪৮৬৪৭৪৬',
    },
    {
      id: 6,
      doctorName: 'মোঃ সাবেরিন সিকদার',
      title: 'ফায়ারম্যান',
      mobileNumber: '০১৬২৬২৩০৪৬৭',
    },
    {
      id: 7,
      doctorName: 'মোঃ হারুন অর রশীদ',
      title: 'লিডার',
      mobileNumber: '০১৯১৬৪৭১৬০৫',
    },
    {
      id: 8,
      doctorName: 'মো: হাসেন আলী',
      title: 'লিডার',
      mobileNumber: '০১৭২৫-৩৬৩০৬১',
    },
    {
      id: 9,
      doctorName: 'মোঃ শফিকুল ইসলাম',
      title: 'ড্রাইভার',
      mobileNumber: '০১৯১৪৪২৫৩৭০',
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
              কর্মকর্তাবৃন্দ, তালিকা এবং মোবাইল নম্বর
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
    backgroundColor: '#FFA07A',
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
    backgroundColor: '#FFA07A',
    paddingTop: 30,
    paddingLeft: 25,
  },
  Taketext: {
    color: 'white',
    fontSize: 25,
  },
  takesewrviceImg: {
    flex: 1,
    backgroundColor: '#FFA07A',
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
