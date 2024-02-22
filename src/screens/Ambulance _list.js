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

let img = require('../assets/ambulance.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Ambulance_list(props) {
  const doctorList = [
    {
      id: 1,
      doctorName: 'ডা: মোহাম্মদ আজিজুল হক',
      title: 'উপজেলা স্বাস্থ্য পঃপঃ কর্মকর্তা',
      mobileNumber: '০১৭১১০২২৯১৪',
      officeNumber: '০১৮১৮৮০৯৭৭৩',
    },
    {
      id: 2,
      doctorName: '	দিলীপ কুমার রায়',
      title: 'Jr. Consultant (Anesthesiology)',
      mobileNumber: '০১৭৭৫৬২৪৯৫০',
      officeNumber: '০১৭৭৫৬২৪৯৫০',
    },
    {
      id: 3,
      doctorName: 'ডাঃ মোঃ মোশাররফ হোসেন',
      title: 'RMO',
      mobileNumber: '০১৭৫১৭৭৮২১৭',
      officeNumber: '০১৭৫১৭৭৮২১৭',
    },
    {
      id: 4,
      doctorName: 'Md. Wali Ullah Molla',
      title: 'Medical Officer',
      mobileNumber: '০১৭১৪৩২৫৯৪৪',
      officeNumber: '০১৭১৪৩২৫৯৪৪',
    },
    {
      id: 5,
      doctorName: 'ডাঃ আবিদা জাহান',
      title: 'Medical Officer',
      mobileNumber: '০১৫২১৫৭৯৯৭১',
      officeNumber: '০১৫২১৫৭৯৯৭১',
    },
    {
      id: 6,
      doctorName: '	ডাঃ হোমায়রা ইয়াসমিন',
      title: 'Medical Officer',
      mobileNumber: '০১৭৫৩৬৯৫০১৪',
      officeNumber: '০১৭৫৩৬৯৫০১৪',
    },
    {
      id: 7,
      doctorName: '	মোঃ মনিরুজ্জামান',
      title: 'Medical Officer',
      mobileNumber: '০১৭১৮৫১৫২০৫',
      officeNumber: '০১৭১৮৫১৫২০৫',
    },
    {
      id: 8,
      doctorName: '	মারজিয়া বেগম',
      title: 'সিনিয়র স্ট্যাফ নার্স',
      mobileNumber: '০১৮৭৮৪৭০১৬৭	',
      officeNumber: '০১৮৭৮৪৭০১৬৭',
    },
    {
      id: 9,
      doctorName: 'মাহমুদা সিদ্দিকা',
      title: 'সিনিয়র ষ্টাফ নার্স',
      mobileNumber: '০১৭২৮৩৩৪১৬৩',
      officeNumber: '০১৭২৮৩৩৪১৬৩',
    },
    {
      id: 10,
      doctorName: 'শাহনাজ বেগম',
      title: 'সিনিয়র ষ্টাফ নার্স',
      mobileNumber: '০১৭৯১২০০৬৬১',
      officeNumber: '০১৭৯১২০০৬৬১',
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
          <Text style={styles.Taketext}>অ্যাম্বুলেন্সের</Text>
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
              অ্যাম্বুলেন্সের ড্রাইভারের তালিকা এবং ফোন নম্বর
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
    fontSize: 25,
  },
  takesewrviceImg: {
    flex: 1,
    backgroundColor: '#3ab54a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 200,
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
