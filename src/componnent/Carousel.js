import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

export default function Carousel() {
  const flatListRef = useRef();
  // get Dimension
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselDate = [
    {
      id: '01',
      image: require('../assets/carousel/Upazila.png'),
    },
    {
      id: '02',
      image: require('../assets/carousel/Thana.jpeg'),
    },
    {
      id: '03',
      image: require('../assets/carousel/NurMorjid.jpg'),
    },
  ];

  //Display Image // UI
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{height: 200, width: screenWidth, objectFit: 'fill'}}
        />
      </View>
    );
  };

  // auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselDate.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  // handle Scroll
  const handleScroll = event => {
    // get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({scrollPosition});
    // get the index current index item
    const index = scrollPosition / screenWidth;
    // console.log({index});
    setActiveIndex(index);
    // update the index
  };

  // Render Dot Indicators
  // const renderDotIndicators = () => {
  //   return carouselDate.map((dot, index) => {
  //     // if the active index === index
  //     if (activeIndex === index) {
  //       return (
  //         <View
  //           key={index}
  //           style={{
  //             backgroundColor: 'green',
  //             height: 8,
  //             width: 8,
  //             borderRadius: 5,
  //             marginHorizontal: 6,
  //           }}
  //         />
  //       );
  //     } else {
  //       return (
  //         <View
  //           key={index}
  //           style={{
  //             backgroundColor: 'red',
  //             height: 8,
  //             width: 8,
  //             borderRadius: 5,
  //             marginHorizontal: 6,
  //           }}
  //         />
  //       );
  //     }
  //   });
  // };

  return (
    <View>
      <FlatList
        data={carouselDate}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        onScroll={handleScroll}
      />

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        {/* {renderDotIndicators()} */}
      </View>
    </View>
  );
}
