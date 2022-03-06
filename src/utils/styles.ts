import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from './constant';

export const globalStyle = StyleSheet.create({});

export const globalTextInput = (isFocus: boolean = false) =>
  StyleSheet.create({
    inputContainerStyle: {
      height: 45,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: isFocus ? COLOR_PALETTE.FOCUS : COLOR_PALETTE.BLUR,
      backgroundColor: COLOR_PALETTE.GRAY,
    },
    leftIconContainerStyle: {
      padding: 10,
    },
    labelStyle: {
      paddingBottom: 15,
      fontWeight: 'bold',
      color: 'black',
      fontSize: 18,
    },
    errorStyle: {
      fontSize: 16,
    },
  });

export const searchStyles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'orange',
    padding: 15,
  },
});
