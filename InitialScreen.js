import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

function InitialScreen({ navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/images/logoabertura.png')} style={styles.image} resizeMode="contain" />
      </View>
      <View style={[styles.buttonContainer, {marginTop: '0'}]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#370e43', height: height * 0.1 }]}
          onPress={() => navigation.navigate('TourismDetailsScreen')}
        >
          <Text style={styles.buttonText}>Cidades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white', borderColor: '#370e43', borderWidth: 1, height: height * 0.1 }]}
          onPress={() => navigation.navigate('HowToGetScreen')}
        >
          <Text style={[styles.buttonText, { color: '#370e43' }]}>Atrações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#002882',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: '#e7ecff',
    fontSize: 18,
  },
  imageContainer: {
    marginTop: -Dimensions.get('window').height * 0.14,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width, 
    marginTop: 0,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: Dimensions.get('window').height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InitialScreen;
