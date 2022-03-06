import { IJadwal } from './interface';

export const COLOR_PALETTE = {
  PRIMARY: '#00BFFF',
  FOCUS: '#88b454',
  BLUR: '#ccc',
  GRAY: '#f8f4f4',
};

export const MASKAPAI = {
  LION_AIR: {
    maskapai_id: 'LION_AIR',
    maskapai_nama: 'LION AIR',
    maskapai_logo: 'LION AIR',
  },
  BATIK_AIR: {
    maskapai_id: 'BATIK_AIR',
    maskapai_nama: 'BATIK AIR',
    maskapai_logo: 'BATIK AIR',
  },
  GARUDA: {
    maskapai_id: 'GARUDA',
    maskapai_nama: 'GARUDA',
    maskapai_logo: 'GARUDA',
  },
  WE_NEED_AIR: {
    maskapai_id: 'WE_NEED_AIR',
    maskapai_nama: 'WE NEED AIR',
    maskapai_logo: 'WE NEED AIR',
  },
  HAIL_THE_AIR: {
    maskapai_id: 'HAIL_THE_AIR',
    maskapai_nama: 'HAIL THE AIR',
    maskapai_logo: 'HAIL THE AIR',
  },
} as const;

export const BANDARA = {
  AN_AIRPORT: {
    bandara_kode: 'AN_AIRPORT',
    bandara_nama: 'AN AIRPORT',
  },
  MAYBE_AIRPORT: {
    bandara_kode: 'MAYBE_AIRPORT',
    bandara_nama: 'MAYBE AIRPORT',
  },
  PLEASE_AIRPORT: {
    bandara_kode: 'PLEASE_AIRPORT',
    bandara_nama: 'PLEASE AIRPORT',
  },
  REACT_AIRPORT: {
    bandara_kode: 'REACT_AIRPORT',
    bandara_nama: 'REACT AIRPORT',
  },
  REACT_NATIVE_AIRPORT: {
    bandara_kode: 'REACT_NATIVE_AIRPORT',
    bandara_nama: 'REACT NATIVE AIRPORT',
  },
} as const;

export const JADWAL: IJadwal[] = [
  {
    jadwal_id: 1,
    bandara_kode_keberangkatan: BANDARA.AN_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.MAYBE_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.GARUDA.maskapai_id,
  },
  {
    jadwal_id: 2,
    bandara_kode_keberangkatan: BANDARA.REACT_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.REACT_NATIVE_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.WE_NEED_AIR.maskapai_id,
  },
  {
    jadwal_id: 3,
    bandara_kode_keberangkatan: BANDARA.PLEASE_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.AN_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.HAIL_THE_AIR.maskapai_id,
  },
  {
    jadwal_id: 4,
    bandara_kode_keberangkatan: BANDARA.PLEASE_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.REACT_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.LION_AIR.maskapai_id,
  },
  {
    jadwal_id: 2,
    bandara_kode_keberangkatan: BANDARA.REACT_NATIVE_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.MAYBE_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.BATIK_AIR.maskapai_id,
  },
  {
    jadwal_id: 2,
    bandara_kode_keberangkatan: BANDARA.PLEASE_AIRPORT.bandara_kode,
    bandara_kode_tujuan: BANDARA.MAYBE_AIRPORT.bandara_kode,
    maskapai_id: MASKAPAI.WE_NEED_AIR.maskapai_id,
  },
];

export const MAX_DAY = {
  JANUARY: 31,
  FEBRUARY: 28,
  MARCH: 31,
  APRIL: 30,
  MAY: 31,
  JUNE: 30,
  JULY: 31,
  AUGUST: 31,
  SEPTEMBER: 30,
  OCTOBER: 31,
  NOVEMBER: 30,
  DECEMBER: 31,
};

export const APPS_NAME = 'Menghealing.id';
