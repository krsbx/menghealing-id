import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Copyright from '../components/Copyright';
import Card from '../components/Card';
import { COLOR_PALETTE, JADWAL } from '../utils/constant';
import { IJadwal, ScreenStackProps } from '../utils/interface';
import _ from '../utils/handler';

const Detail: React.FC<ScreenStackProps<'Detail'>> = ({ navigation, route }) => {
  const { arrival, date, departure } = route.params;
  const generatedDate = _.generateDate(date);
  const localDate = _.getLocalDate(generatedDate);
  const [day, month] = localDate.split(' ');
  const dateToShow = `${day}, ${generatedDate.getDate()} ${month} ${generatedDate.getFullYear()}`;

  const [data, setData] = useState<IJadwal[]>([]);

  useEffect(() => {
    setData(
      _.filter(
        JADWAL,
        (jadwal) =>
          jadwal.bandara_kode_keberangkatan === departure && jadwal.bandara_kode_tujuan === arrival
      )
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="long-arrow-alt-left"
          size={24}
          color="white"
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Hasil Pencarian Penerbangan</Text>
            <Text style={styles.title}>({dateToShow})</Text>
          </View>
          {data.length > 0 ? (
            <FlatList
              style={{ marginTop: 10 }}
              data={data}
              renderItem={({ item }) => <Card date={dateToShow} booking={item} />}
            />
          ) : (
            <View style={styles.notFound}>
              <Text style={styles.noResult}>Jadwal penerbangan tidak tersedia</Text>
            </View>
          )}
        </View>
        <Copyright />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: COLOR_PALETTE.GRAY,
    justifyContent: 'space-between',
    flex: 1,
  },
  mainContainer: {
    backgroundColor: COLOR_PALETTE.FOCUS,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  container: {
    marginHorizontal: 10,
    paddingTop: 2,
  },
  notFound: {
    paddingTop: 10,
    alignItems: 'center',
  },
  noResult: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});

export default Detail;
