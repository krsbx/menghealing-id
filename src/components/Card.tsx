import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { IJadwal } from '../utils/interface';
import { COLOR_PALETTE } from '../utils/constant';
import _ from '../utils/handler';

const Card: React.FC<Props> = ({ date, booking }) => {
  const { bandara_kode_keberangkatan: departure, bandara_kode_tujuan: arrival } = booking;
  const bandara = _.getBandara(departure, arrival);
  const maskapai = _.getMaskapai(booking.maskapai_id);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.location}>{_.toCapitalize(bandara?.depart?.bandara_nama ?? '')}</Text>
        <Text style={styles.location}>{_.toCapitalize(bandara?.arrive?.bandara_nama ?? '')}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Fontisto name="plane" color={COLOR_PALETTE.FOCUS} size={25} />
          <Text style={styles.plane}>{_.toCapitalize(maskapai?.maskapai_nama ?? '')}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 30,
  },
  plane: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 10,
  },
  date: {
    fontWeight: '700',
    fontSize: 20,
    color: '#2d5497',
  },
});

type Props = {
  date: string;
  booking: IJadwal;
};

export default Card;
