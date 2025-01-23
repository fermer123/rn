import {useGlobalContext} from '@/context/GlobalContextProvider';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const Home = () => {
  const {user} = useGlobalContext();
  console.log('user', user);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='flex gap-20 w-full justify-center px-6 my-6'>
          <View className='flex flex-col '>
            <Text className='font-psemibold text-[14px] color-gray-100'>
              Welcome Back
            </Text>
            <Text className='font-psemibold text-xl color-gray-100'>
              {user?.userName}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
