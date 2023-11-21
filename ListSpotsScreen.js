import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'; 


const data = [
  {
    id: 1,
    title: 'Andradina - SP',
    description: 'Descrição breve do Local 1',
    carouselImages: [
      require('./assets/images/image1.jpg'),
      require('./assets/images/image2.jpg'),
      require('./assets/images/image3.jpg'),
    ],
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/andradina.jpg'),
    screen: 'InitialScreen', 
  },
  {
    id: 1,
    title: 'Andradina - SP',
    description: 'Descrição breve do Local 1',
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/andradina.jpg'),
    screen: 'InitialScreen', 
  },
  {
    id: 2,
    title: 'Castilho - SP',
    description: 'Descrição breve do Local 2',
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/castilho.jpg'),
    screen: 'DetailsScreen',
  },
  {
    id: 3,
    title: 'Três Lagoas - MS',
    description: 'Descrição breve do Local 3',
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/treslagoas.jpg'),
    screen: 'InitialScreen', 
  },
  {
    id: 4,
    title: 'Pereira Barreto - SP',
    description: 'Descrição breve do Local 4',
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/pereira.jpg'),
    screen: 'InitialScreen', 
  },
  {
    id: 5,
    title: 'Ilha Solteira - SP',
    description: 'Descrição breve do Local 5',
    imageUrl: require('./assets/images/comerc.png'),
    logoUrl: require('./assets/images/ilha.jpg'),
    screen: 'InitialScreen', 
  },
];

function ListSpotsScreen() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const renderCarouselItem = ({ item }) => (
    <Image source={item} style={styles.carouselImage} resizeMode="cover" />
  );

  return (
    <LinearGradient
    colors={['#003293', '#00134d', '#3f1048']}
    style={styles.backgroundGradient}
  >
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handleCardPress(item.screen)}
        >
          <View style={styles.leftColumn}>
            <Image source={item.logoUrl} style={styles.logo} />
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.title}>{item.title}</Text>
            <Carousel
              data={item.carouselImages}
              renderItem={renderCarouselItem}
              sliderWidth={Dimensions.get('window').width * 0.8}
              itemWidth={Dimensions.get('window').width * 0.8}
              loop
              autoplay
              autoplayInterval={3000}
            />
            <Image source={item.imageUrl} style={styles.image} resizeMode="contain" />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  carouselItem: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
  },
  container: {
    flexGrow: 1,
    padding: Dimensions.get('window').width * 0.06,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: Dimensions.get('window').width * 0.06, 
    padding: Dimensions.get('window').width * 0.04, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  leftColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Dimensions.get('window').width * 0.04,
  },
  logo: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
    borderRadius: 42,
  },
  rightColumn: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: Dimensions.get('window').width * 0.02,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: 'auto',
    height: Dimensions.get('window').width * 0.08,
    borderRadius: 1,
    marginTop: 10,
  },
});

export default TourismDetailsScreen;
