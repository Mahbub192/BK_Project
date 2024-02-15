import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Carousel from '../componnent/Carousel';
import Service from '../pages/Service';
import Ct_home_service_tab_section from '../componnent/Ct_home_service_tab_section';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <ScrollView>
        <View style={styles.container}>
          <Carousel navigation={navigation} />
          <Service navigation={navigation} />
          <Ct_home_service_tab_section navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#ffffff',
    // color: '#000000',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
