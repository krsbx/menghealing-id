import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const TopBar: React.FC = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}
      >
        <FontAwesome name="bars" size={24} color="white" />
        <FontAwesome name="user-alt" size={24} color="white" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Menghealing.id
        </Text>
      </View>
    </View>
  );
};

export default TopBar;
