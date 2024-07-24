import { Theme } from "@react-navigation/native";

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = '#000';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: tintColorLight,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#000',
    card: 'rgb(18, 18, 18)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
    ...Colors.dark
  },
};



export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: '#fff',
    card: '#fff',
    border: '#fff',
    notification: 'rgb(255, 59, 48)',
    ...Colors.light
  },
};

