import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 

function DetailsScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Castilho - SP</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/image1.jpg')} style={styles.imageLarge} resizeMode="contain" />
        </View>
        <Text style={styles.description}>
        Castilho é um município brasileiro do estado de São Paulo. Localiza-se a uma latitude 20º52'20" sul e a uma longitude 51º29'15" oeste, estando a uma altitude de 365 metros. Sua população de acordo com o Censo de 2022 era de 19 977 habitantes, distribuídos em uma área de 1065,32 km².[2] É uma das onze cidades da Região Imediata de Andradina, que por sua vez é uma das três regiões que integram a Região Intermediária de Araçatuba.     
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('TourismDetailsScreen')}
        >
          <Text style={styles.buttonText}>Cidades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('InitialScreen')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Atrações</Text>
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.04,
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.1,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  imageLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.08,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginHorizontal: 10, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20, 
  },
  firstButton: {
    borderColor: 'white',
    borderWidth:1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.28,
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.48,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButtonText: {
    color: '#370e43',
  },
});

export default DetailsScreen;
