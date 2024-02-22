import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

let img = require('../assets/police/police.png');
let img1 = require('../assets/images/hospital/emergency-call.png');
let img2 = require('../assets/police/police.png');

export default function Police(props) {
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
            <Text style={styles.Service}> আপনি কি ধরনের সেবা নিতে চান ?</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.singleImageContainer}
              onPress={() =>
                props.navigation.navigate('Police Emergency Call')
              }>
              <View style={styles.imageBackground}>
                <Image source={img1} style={styles.img1} />
              </View>
              <View style={styles.textContainer}>
                <Text
                  style={[styles.serviceText, {paddingTop: 10, fontSize: 18}]}>
                  জরুরি সেবা{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.singleImageContainer}
              onPress={() => props.navigation.navigate('Police List')}>
              <View style={styles.imageBackground}>
                <Image source={img2} style={styles.img2} />
              </View>
              <View style={styles.textContainer}>
                <Text
                  style={[styles.serviceText, {paddingTop: 8, fontSize: 18}]}>
                  পুলিশের
                </Text>
                <Text
                  style={[styles.serviceText, {paddingTop: 5, fontSize: 18}]}>
                  তালিকা
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.button}>My orders</Text>
            </TouchableOpacity> */}
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
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  img1: {
    height: 100,
    width: 100,
  },
  img2: {
    height: 130,
    width: 130,
  },
  serviceText: {
    textAlign: 'center',
    color: '#5D3587',
    fontFamily: 'nunito-regular',
    fontSize: 16,
  },
  singleImageContainer: {
    borderRadius: 10,
    height: 180,
    width: 130,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  imageBackground: {
    backgroundColor: '#E2F3F8',
    width: 100,
    height: 100,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceButton: {
    width: 150,
    marginTop: 40,
  },
  button: {
    backgroundColor: '#3ab54a',
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: 'nunito-regular',
    fontSize: 18,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
});
