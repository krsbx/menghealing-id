import { StackScreenProps } from '@react-navigation/stack';

export interface IMaskapai {
  maskapai_id: string;
  maskapai_nama: string;
  maskapai_logo: string;
}

export interface IBandara {
  bandra_kode: string;
  bandra_nama: string;
}

export interface IJadwal {
  jadwal_id: number;
  bandra_kode: IBandara['bandra_kode'];
  maskapai_id: IMaskapai['maskapai_id'];
}

export type ScreenStackType = {
  Home: {
    screen?: keyof ScreenStackType;
  };
  Detail: {
    screen?: keyof ScreenStackType;
  };
};

export type ScreenStackProps<T extends keyof ScreenStackType> =
  StackScreenProps<ScreenStackType, T>;
