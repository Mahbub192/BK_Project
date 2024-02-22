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

let img = require('../assets/police/police.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/images/hospital/doctors.png');
let callImage = require('../assets/call.png');

export default function Police_Emergency_Call(props) {
  return (
    <ScrollView style={styles.container}>
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
            <Text style={styles.Service}> যোগাযোগ</Text>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>অফিসার ইনচার্জ</Text>
              <Text style={styles.cardText}>বকশীগঞ্জ থানা, জেলা-জামালপুর।</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:০১৩২০১০৫৩৩৫`)}>
                  <Image source={callImage} style={styles.callImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:০১৩২০১০৫৩৩৫`)}>
                  <Text style={[styles.cardText]}>মোবাইল : ০১৩২০১০৫৩৩৫</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.cardText}>ডিউটি অফিসার</Text>
              <Text style={styles.cardText}>বকশীগঞ্জ থানা, জেলা-জামালপুর।</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:০১৩২০১০৫৩৪০`)}>
                  <Image source={callImage} style={styles.callImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:০১৩২০১০৫৩৪০`)}>
                  <Text style={[styles.cardText]}>মোবাইল : ০১৩২০১০৫৩৪০</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
