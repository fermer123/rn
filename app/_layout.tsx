import {useFonts} from '@/hooks/useFonts';
import '../global.css';
import {SplashScreen, Stack} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFonts();
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />
      <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      {/* <Stack.Screen name='/search/[query]' options={{headerShown: false}} /> */}
    </Stack>
  );
}
