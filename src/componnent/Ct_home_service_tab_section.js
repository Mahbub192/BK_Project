import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ct_img_btn from './Ct_img_btn';

const online_pharmacy_img = require('../assets/carousel/NurMorjid.jpg');
const online_report_img = require('../assets/carousel/NurMorjid.jpg');
const home_call_img = require('../assets/carousel/NurMorjid.jpg');
const bmi_calc_img = require('../assets/carousel/NurMorjid.jpg');
const fullBody_checkup_img = require('../assets/carousel/NurMorjid.jpg');
const lab_test_img = require('../assets/carousel/NurMorjid.jpg');
const hospital_img = require('../assets/carousel/NurMorjid.jpg');
const upazilaHuman_img = require('../assets/images/service/human.jpg');
const upazilaNirbachon_img = require('../assets/images/service/nirbachon.png');
const ambulance_img = require('../assets/images/service/ambulance.png');
const {height, width, font} = Dimensions.get('window');

export default function Ct_home_service_tab_section() {
  const [selectedTab, setselectedTab] = useState('ডাক্তার চেম্বার');
  return (
    <View>
      <View style={styles.tabHeader}>
        <TouchableOpacity
          style={{
            ...styles.tabHeader_Clikable,
            backgroundColor:
              selectedTab === 'অ্যাম্বুলেন্স' ? '#00a651' : '#ffffff',
            borderRightWidth: 1,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          onPress={() => setselectedTab('অ্যাম্বুলেন্স')}>
          <Text
            style={{
              color: selectedTab === 'অ্যাম্বুলেন্স' ? '#ffffff' : '#00a651',
              fontSize: 16,
              fontFamily: 'nunito-regular',
            }}>
            অ্যাম্বুলেন্স
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tabHeader_Clikable,
            backgroundColor:
              selectedTab === 'ডাক্তার চেম্বার' ? '#00a651' : '#ffffff',
            borderLeftWidth: 1,
            borderRightWidth: 1,
          }}
          onPress={() => setselectedTab('ডাক্তার চেম্বার')}>
          <Text
            style={{
              color: selectedTab === 'ডাক্তার চেম্বার' ? '#ffffff' : '#00a651',
              fontSize: 16,
              fontFamily: 'nunito-regular',
              //fontSize:  width > 400 ? 16 :8,
            }}>
            ডাক্তার চেম্বার
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tabHeader_Clikable,
            backgroundColor: selectedTab === 'উপজেলা' ? '#00a651' : '#ffffff',
            borderLeftWidth: 1,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
          onPress={() => setselectedTab('উপজেলা')}>
          <Text
            style={{
              color: selectedTab === 'উপজেলা' ? '#ffffff' : '#00a651',
              fontSize: 16,
              fontFamily: 'nunito-regular',
            }}>
            উপজেলা
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'ডাক্তার চেম্বার' ? (
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Ct_img_btn
            img={online_pharmacy_img}
            title={'Online Pharmacy'}
            pressFunc
          />
          <Ct_img_btn
            img={online_report_img}
            title={'Online Report'}
            pressFunc
          />
          <Ct_img_btn
            img={home_call_img}
            title={'HomeCall Service'}
            pressFunc
          />
          {/* <Ct_img_btn img={home_call_img} title={"HomeCall Service"} pressFunc = {() => router.push("/(drawer)/(tabs)/home/HomeCallService")}/> */}
        </View>
      ) : null}
      {selectedTab === 'অ্যাম্বুলেন্স' ? (
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 20,
          }}>
          <Ct_img_btn img={ambulance_img} title={'অ্যাম্বুলেন্স'} pressFunc />
        </View>
      ) : null}
      {selectedTab === 'উপজেলা' ? (
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Ct_img_btn
            img={upazilaHuman_img}
            title={'উপজেলা নির্বাহী অফিসার'}
            pressFunc
          />
          <Ct_img_btn
            img={upazilaNirbachon_img}
            title={'উপজেলা নির্বাচন অফিস'}
            pressFunc
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  tabHeader: {
    flex: 1,
    // flexDirection: 'column',
    margin: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 8,
  },
  tabHeader_Clikable: {
    borderWidth: 2,
    borderColor: '#00a651',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
