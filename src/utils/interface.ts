import { StackScreenProps } from '@react-navigation/stack';
import { BANDARA, MASKAPAI } from './constant';

export interface IMaskapai {
  maskapai_id: keyof typeof MASKAPAI;
  maskapai_nama: string;
  maskapai_logo: string;
}

export interface IBandara {
  bandara_kode: keyof typeof BANDARA;
  bandara_nama: string;
}

export interface IJadwal {
  jadwal_id: number;
  bandara_kode_keberangkatan: IBandara['bandara_kode'];
  bandara_kode_tujuan: IBandara['bandara_kode'];
  maskapai_id: IMaskapai['maskapai_id'];
}

export type ScreenStackType = {
  Home: {
    screen?: keyof ScreenStackType;
  };
  Detail: {
    screen?: keyof ScreenStackType;
    departure: keyof typeof BANDARA;
    arrival: keyof typeof BANDARA;
    date: string;
  };
};

export type ScreenStackProps<T extends keyof ScreenStackType> = StackScreenProps<
  ScreenStackType,
  T
>;
