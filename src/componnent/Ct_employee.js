import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

let img = require('../assets/images/hospital/healthcare.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Ct_employee({singleDoctor}) {
  return (
    <View style={styles.card}>
      <View>
        <View style={{}}>
          <Text style={styles.cardText}>নাম: {singleDoctor?.doctorName}</Text>
          <Text style={styles.cardText}>পদবি: {singleDoctor?.title}</Text>
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
  );
}

const styles = StyleSheet.create({
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
