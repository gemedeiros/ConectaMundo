import React from 'react';
import { View, Button } from 'react-native';

function HowToGetScreen() {
  const openGoogleMaps = () => {
    
  };

  return (
    <View>
      <Button title="Gerar Rota" onPress={openGoogleMaps} />
    </View>
    
  );
}

export default HowToGetScreen;
