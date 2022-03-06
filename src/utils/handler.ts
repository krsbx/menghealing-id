import { MAX_DAY, BANDARA, MASKAPAI } from './constant';
import { IMaskapai } from './interface';

// Check if the data is exist or not
const isNil = (value: any): boolean => value === null || value === undefined;

// Check if the data is an array or not
const isArray = (value: any): boolean => Array.isArray(value);

// Transform an object to an array
const toArray = (obj: any): any[] => {
  // Return empty array if obj is not exist
  if (isNil(obj)) return [];

  // Return obj if obj is an array
  if (Array.isArray(obj)) return obj;

  const arr = [];

  for (const key in obj) {
    if ((obj as Record<any, any>).hasOwnProperty(key)) arr.push(obj[key]);
  }

  return arr;
};

// Pad the value with the count * padder
const padStart = (value: string, count: number, padder: string): string => {
  if (!value) return '';

  return value.padStart(count, padder);
};

// Pad the value with the count * padder
const padEnd = (value: string, count: number, padder: string): string => {
  if (!value) return '';

  return value.padEnd(count, padder);
};

// Map the whole data to an array
const map = (value: any, callback: (value: any, index: string | number, array: any[]) => void) => {
  if (Array.isArray(value)) return value.map(callback);

  return Object.keys(value).map((key) => callback(value[key], key, value));
};

// Filter the whole data to specific array
const filter = (
  value: any,
  callback: (value: any, index: string | number, array: any[]) => void
) => {
  if (Array.isArray(value)) return value.filter(callback);

  return Object.keys(value).filter((key) => callback(value[key], key, value));
};

// Capitalize the first letter of the string
const capitalize = (value: string): string => `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

// Capitalize the first letter of the string for each words
const toCapitalize = (value: string): string => map(value.split(' '), capitalize).join(' ');

// Uppercase the string
const upperCase = (value: string): string => value.toUpperCase();

// Lowercase the string
const lowerCase = (value: string): string => value.toLowerCase();

// Check if the collections contain specific value
const include = (collections: any, value: any): boolean => {
  if (!collections) return false;

  if (Array.isArray(collections)) return collections.includes(value);

  return (collections as Record<any, any>).hasOwnProperty(value);
};

const validateDate = (date: string, errors: Record<string, string>): void => {
  if (date.trim() === '') {
    errors.date = 'Tanggal Keberangkatan dibutuhkan';

    return;
  }

  const stringDate = date.split('/');
  const [year, month, day] = stringDate;
  const newMonth = parseInt(month, 10);

  if (year.length > 4 && !errors.date) errors.date = 'Tahun tidak valid';

  if (month.length > 2 && !errors.date) errors.date = 'Bulan tidak valid';

  if ((newMonth < 0 || newMonth > 12) && !errors.date) errors.date = 'Bulan tidak valid';

  if (day.length > 2 && !errors.date) errors.date = 'Hari tidak valid';

  if (
    (parseInt(day, 10) < 1 || parseInt(day, 10) > toArray(MAX_DAY)?.[newMonth - 1]) &&
    !errors.date
  )
    errors.date = 'Hari tidak valid';

  if (stringDate.length !== 3 && !errors.date) errors.date = 'Format tanggal haruslah YYYY/MM/DD';
};

const generateDate = (date: string): Date => {
  if (date.split('/').length !== 3) return new Date();

  const [year, month, day] = date.split('/');

  if (year.length === 4) {
    return new Date(`${month}/${day}/${year}`);
  }

  return new Date(date);
};

const getLocalDate = (date: Date): string => date.toLocaleString('id-ID', { weekday: 'long' });

// Get Bandara by departure and arrival
const getBandara = (departure: keyof typeof BANDARA, arrival: keyof typeof BANDARA) => {
  // If departure and arrival is not exist, return empty object
  const depart = BANDARA[departure] ?? {};
  const arrive = BANDARA[arrival] ?? {};

  return {
    depart,
    arrive,
  };
};

// Get Maskapai by id
const getMaskapai = (id: keyof typeof MASKAPAI): IMaskapai => {
  // If id is not exist, return empty object
  return MASKAPAI[id] ?? {};
};

const toBandaraID = (value: string): keyof typeof BANDARA => {
  if (!value) return '' as keyof typeof BANDARA;

  if (value.trim() === '') return '' as keyof typeof BANDARA;

  const newValue = value.replace(' ', '_').toUpperCase();

  return newValue as keyof typeof BANDARA;
};

const handler = {
  isNil,
  isArray,
  toArray,
  padStart,
  padEnd,
  map,
  filter,
  capitalize,
  toCapitalize,
  upperCase,
  lowerCase,
  include,
  validateDate,
  generateDate,
  getLocalDate,
  getBandara,
  getMaskapai,
  toBandaraID,
};

export default handler;
