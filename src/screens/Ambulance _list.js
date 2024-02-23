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
      doctorName: 'আলামিন',
      title: 'নন-এসি অ্যাম্বুলেন্স',
      mobileNumber: '01912199178',
      officeNumber: '01312199178',
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
              অ্যাম্বুলেন্সের ড্রাইভারের তালিকা এবং মোবাইল নম্বর
            </Text>
          </View>
          <ScrollView style={{backgroundColor: '#CCCCFF'}}>
            {doctorList.map(singleDoctor => (
              //   <Ct_employee singleDoctor={singleDoctor} />
              <View style={styles.card}>
                <View>
                  <View style={{}}>
                    <Text style={styles.cardText}>
                      নাম: {singleDoctor?.doctorName}
                    </Text>
                    <Text style={styles.cardText}> {singleDoctor?.title}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(`tel:${singleDoctor?.mobileNumber}`)
                      }>
                      <Image source={callImage} style={styles.callImage} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(`tel:${singleDoctor?.mobileNumber}`)
                      }>
                      <Text style={[styles.cardText]}>
                        মোবাইল : {singleDoctor?.mobileNumber}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {singleDoctor?.officeNumber && (
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        marginTop: 8,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(`tel:${singleDoctor?.officeNumber}`)
                        }>
                        <Image source={callImage} style={styles.callImage} />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(`tel:${singleDoctor?.officeNumber}`)
                        }>
                        <Text style={[styles.cardText]}>
                          মোবাইল : {singleDoctor?.officeNumber}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
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

  card: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    margin: 10,
    backgroundColor: 'white',

    //Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cardText: {
    color: 'black',
    fontSize: 18,
  },
  callImage: {
    height: 20,
    width: 20,
  },
});
