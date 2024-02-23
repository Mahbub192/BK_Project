import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ct_employee from '../componnent/Ct_employee';

let img = require('../assets/images/service/nirbachon.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Upazila_Nirbachon_Office(props) {
  const doctorList = [
    {
      id: 1,
      doctorName: 'তাহমীদ হাসান মেহেদী',
      title: 'ডাটা এন্ট্রি অপারেটর',
      mobileNumber: '০১৯১৭৩০৫০৮২',
    },
    {
      id: 2,
      doctorName: '	মোঃ শাহাদাত হোসাইন',
      title: 'ডাটা এন্ট্রি অপারেটর',
      mobileNumber: '০১৭৫১৩০১৮৩০',
    },
    {
      id: 3,
      doctorName: '	হযরত আলী',
      title: 'স্ক্যানিং এন্ড ইকুইপমেন্ট মেইনটেন্যান্স অপারেটর',
      mobileNumber: '০১৯৪৮৩৮৯৫৩৮',
    },
    {
      id: 4,
      doctorName: 'মোহাম্মদ মাসুদ করিম',
      title: '	অফিস সহায়ক',
      mobileNumber: '০১৭২৮৬৮৪৩২২',
    },
    {
      id: 5,
      doctorName: 'মোঃ সুমন মিয়া',
      title: 'পরিচ্ছন্নতা কর্মী',
      mobileNumber: '০১৯২১৩৩৯৭০৯',
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
          <Text style={styles.Taketext}>উপজেলা নির্বাচন</Text>
          <Text style={styles.Taketext}>অফিস,বকশীগঞ্জ</Text>
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
              কর্মচারীবৃন্দ তালিকা এবং মোবাইল নম্বর
            </Text>
          </View>
          <ScrollView style={{backgroundColor: '#CCCCFF'}}>
            {doctorList.map(singleDoctor => (
              <Ct_employee singleDoctor={singleDoctor} />
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
    backgroundColor: '#3ab54a',
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
    backgroundColor: '#3ab54a',
    paddingTop: 30,
    paddingLeft: 25,
  },
  Taketext: {
    color: 'white',
    fontSize: 20,
  },
  takesewrviceImg: {
    flex: 1,
    backgroundColor: '#3ab54a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 60,
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
