import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { Svg, Polygon } from 'react-native-svg';
import { BlurView } from 'expo-blur';

import { COLORS, FONTS, images, SIZES } from '../../constants';
import { recentlyViewedLabel } from '../../constants/images';

import styles from './styles';

const Home = () => {
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const [trending, SetTrending] = useState([
    {
      id: 0,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikeMetconPegasus36,
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: 'Nike Air Zoom Kobe 1 Proto',
      img: images.nikeZoomKobe1Protro,
      bgColor: '#7052A0',
      type: 'BASKETBALL',
      price: '$199',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 2,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
  ]);

  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 0,
      name: 'Nike Metcon 4',
      img: images.nikeMetcon4,
      bgColor: '#414045',
      type: 'TRAINING',
      price: '$119',
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: 'Nike Metcon 3',
      img: images.nikeMetcon3,
      bgColor: '#A69285',
      type: 'TRAINING',
      price: '$99',
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 2,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#2B4660',
      type: 'TRAINING',
      price: '$124',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: 'Nike Metcon 6',
      img: images.nikeMetcon6,
      bgColor: '#4EABA6',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 4,
      name: 'Nike Metcon Free',
      img: images.nikeMetconFree,
      bgColor: '#A02E41',
      type: 'TRAINING',
      price: '$108',
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  function renderTrendingShoes(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...trendingStyle,
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: SIZES.base,
            borderRadius: 10,
            marginRight: SIZES.padding,
            paddingLeft: SIZES.radius,
            paddingRight: SIZES.padding,
            paddingBottom: SIZES.radius,
            backgroundColor: item.bgColor,
          }}
        >
          <View style={{ height: '35%', justifyContent: 'space-between' }}>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {item.price}
            </Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
          }}
        >
          <Svg height='100%' width='100%'>
            <Polygon points='0,0 160,0 160,80' fill='white' />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode='cover'
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            transform: [{ rotate: '-15deg' }],
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            source={item.img}
            resizeMode='contain'
            style={{ width: 130, height: 100 }}
          />
        </View>

        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.name}
          </Text>
          <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Trending */}
      <Text style={styles.scrollHeader}>TRENDING</Text>

      <View style={styles.trendingContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>

      {/* Recently Viewed */}
      <View style={[styles.recentContainer, styles.recentContainerShadow]}>
        <View style={styles.recentCategory}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode='contain'
            style={styles.label}
          />
        </View>
        <View style={styles.itemList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>

      {/* Modal Add to Bag */}
      {selectedItem && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={showAddToBagModal}
        >
          <BlurView style={styles.blur} tint='dark' intensity={100}>
            {/* Close Modal */}

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => {
                setSelectedItem(null),
                  setSelectedSize(''),
                  setShowAddToBagModal(false);
              }}
            ></TouchableOpacity>

            <View
              style={[
                { backgroundColor: selectedItem.bgColor },
                styles.modalContainer,
              ]}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -SIZES.padding * 2,
                }}
              >
                <Image
                  source={selectedItem.img}
                  resizeMode='contain'
                  style={styles.imageModal}
                />
              </View>

              <Text style={styles.itemName}>{selectedItem.name}</Text>

              <Text style={styles.itemType}>{selectedItem.type}</Text>

              <Text style={styles.itemPrice}>{selectedItem.price}</Text>

              <TouchableOpacity
                style={styles.addToBagButton}
                onPress={() => {
                  setSelectedItem(null),
                    setSelectedSize(''),
                    setShowAddToBagModal(false);
                }}
              >
                <Text style={styles.addToBagButtonText}>Add to Bag</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
};

export default Home;
