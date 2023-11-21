import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function TouristSpotsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Título do Ponto Turístico</Text>
      <Image source={require('./assets/images/touristSpotImage1.jpeg')} style={styles.image} />
      <Text>Descrição breve do ponto turístico.</Text>
      <Button
        title="Saber mais"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2, 
    borderBottomColor: 'white'
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default TouristSpotsScreen;
