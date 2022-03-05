import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { ScreenStackProps } from '../utils/interface';

const Home: React.FC<ScreenStackProps<'Home'>> = ({ navigation, route }) => {
  const today = new Date();
  const [date, setDate] = useState(today);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <DatePicker date={date} minimumDate={today} onDateChange={setDate} />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
