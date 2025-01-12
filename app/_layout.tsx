import {useFonts} from '@/hooks/useFonts';
import '../global.css';
import {SplashScreen, Stack} from 'expo-router';

import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFonts();
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
    </Stack>
  );
}
