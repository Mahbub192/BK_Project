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

let img = require('../assets/upazila.jpeg');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Upazila_Officer(props) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />
      <View style={styles.contentContainer}>
        <View style={styles.takesewrvice}>
          <Text style={styles.Taketext}>উপজেলা</Text>
          <Text style={styles.Taketext}>নির্বাহী</Text>
          <Text style={styles.Taketext}>অফিসার</Text>
        </View>
        <View style={styles.takesewrviceImg}>
          <Image source={img} style={styles.img} />
        </View>
      </View>
      <View style={styles.curveContainer}>
        <View style={styles.curve}>
          <View>
            <Text style={styles.Service}> যোগাযোগ</Text>
          </View>
          <View style={styles.card}>
            <View>
              <View style={{}}>
                <Text style={styles.cardText}>নাম : অহনা জিন্নাত</Text>
                <Text style={styles.cardText} />
                <Text style={styles.cardText}>
                  বর্তমান কর্মস্থলে যোগদানের তারিখ : ২৮ আগষ্ট ২০২৩
                </Text>
                <Text style={styles.cardText}>বকশীগঞ্জ, জামালপুর।</Text>
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
                  onPress={() => Linking.openURL('tel:০১৭০৯৯৭০১১৪')}>
                  <Image source={callImage} style={styles.callImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:০১৭০৯৯৭০১১৪')}>
                  <Text style={[styles.cardText]}>মোবাইল : ০১৭০৯৯৭০১১৪</Text>
                </TouchableOpacity>
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
                  onPress={() => Linking.openURL('tel:০৯৮২২-৫৬০০১')}>
                  <Image source={callImage} style={styles.callImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:০৯৮২২-৫৬০০১')}>
                  <Text style={[styles.cardText]}>
                    মোবাইল (অফিস) : ০৯৮২২-৫৬০০১
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer} />
        </View>
      </View>
    </ScrollView>
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
    height: 200,
    width: 200,
    borderRadius: 150,
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
    margin: 50,
    color: '#5D3587',
    fontWeight: '600',
    fontFamily: 'nunito-regular',
    fontSize: 24,
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
