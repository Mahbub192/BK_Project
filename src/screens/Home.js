import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Carousel from '../componnent/Carousel';
import Service from '../pages/Service';

const Home = ({navigation}) => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Carousel navigation={navigation} />
          <Service navigation={navigation} />
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
