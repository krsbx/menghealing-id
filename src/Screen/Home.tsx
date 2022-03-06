import React, { useRef, useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { ScreenStackProps } from '../utils/interface';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { BANDARA, COLOR_PALETTE } from '../utils/constant';
import { globalTextInput, searchStyles } from '../utils/styles';
import _ from '../utils/handler';
import Copyright from '../components/Copyright';

const Home: React.FC<ScreenStackProps<'Home'>> = ({ navigation }) => {
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const [error, setError] = useState<Record<string, string>>({});

  const arrivalRef = useRef<TextInput>(null);
  const departureRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);

  const onSubmit = () => {
    setError({});
    const errors: Record<string, string> = {};

    _.validateDate(date, errors);

    if (departure.trim() === '') errors.departure = 'Lokasi Keberangkatan dibutuhkan';

    if (arrival.trim() === '') errors.arrival = 'Lokasi Kedatangan dibutuhkan';

    const newDepature = _.toBandaraID(departure);
    const newArrival = _.toBandaraID(arrival);

    if (!_.include(BANDARA, newDepature) && !error.departure)
      errors.departure = 'Lokasi Keberangkatan tidak ditemukan';

    if (!_.include(BANDARA, newArrival) && !error.arrival)
      errors.arrival = 'Lokasi Tujuan tidak ditemukan';

    if (Object.keys(errors).length > 0) return setError(errors);

    navigation.navigate('Detail', {
      departure: newDepature,
      arrival: newArrival,
      date,
    });
  };

  const onBlur = () => {
    if (date.trim() === '') return;

    const [year, month, day] = date.split('/');

    let newMonth = month;
    let newDay = day;

    newMonth = _.padStart(newMonth, 2, '0');
    newDay = _.padStart(newDay, 2, '0');

    setDate(
      `${year ? `${year}/` : ''}${newMonth ? `${newMonth}/` : ''}${newDay ? `${newDay}` : ''}`
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.parentContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <Input
                value={departure}
                onChangeText={setDeparture}
                autoCompleteType={undefined}
                {...globalTextInput(arrivalRef.current?.isFocused())}
                leftIcon={
                  <FontAwesome name="plane-departure" size={20} color={COLOR_PALETTE.FOCUS} />
                }
                leftIconContainerStyle={{
                  padding: 10,
                }}
                errorMessage={error.departure}
                placeholder="Masukan Lokasi Keberangkatan"
                label="Lokasi Keberangkatan"
                ref={arrivalRef}
              />
            </View>
            <View style={styles.container}>
              <Input
                value={arrival}
                onChangeText={setArrival}
                autoCompleteType={undefined}
                {...globalTextInput(departureRef.current?.isFocused())}
                leftIcon={
                  <FontAwesome name="plane-arrival" size={20} color={COLOR_PALETTE.FOCUS} />
                }
                leftIconContainerStyle={{
                  padding: 10,
                }}
                errorMessage={error.arrival}
                placeholder="Masukan Lokasi Tujuan"
                label="Lokasi Tujuan"
                ref={departureRef}
              />
            </View>
            <View style={styles.container}>
              <Input
                value={date}
                onChangeText={setDate}
                onBlur={onBlur}
                autoCompleteType={undefined}
                {...globalTextInput(dateRef.current?.isFocused())}
                leftIcon={<FontAwesome name="calendar-alt" size={20} color={COLOR_PALETTE.FOCUS} />}
                leftIconContainerStyle={{
                  padding: 10,
                }}
                errorMessage={error.date}
                placeholder="Masukan Tanggal Keberangkatan"
                label="Tanggal Keberangkatan"
                ref={dateRef}
              />
            </View>
            <View style={styles.container}>
              <Button title="Cari" {...searchStyles} onPress={onSubmit} />
            </View>
          </View>
        </View>
        <Copyright />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: COLOR_PALETTE.GRAY,
    justifyContent: 'space-between',
    flex: 1,
  },
  parentContainer: {
    backgroundColor: COLOR_PALETTE.FOCUS,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 15,
  },
  container: {
    marginHorizontal: 10,
    paddingTop: 2,
  },
});

export default Home;
