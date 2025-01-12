import CustomButton from '@/components/CustomButton';
import {images} from '@/constants';
import {router} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='flex w-full h-full justify-center items-center px-4 gap-10'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] max-h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with
              <Text className='text-secondary-200'> Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode='contain'
              className='w-[136px] h-[15px] absolute -bottom-3 right-20'
            />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey with Aora
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/(auth)/sign-in')}
            containerStyles='mt-7 w-full'
          />
        </View>
      </ScrollView>
      <StatusBar translucent={false} backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default App;
{
  /* <Link href='/home'>Home</Link>
<Link href='/bookmark'>Bookmark</Link>
<Link href='/create'>Create</Link> */
}
