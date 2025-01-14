import {Link} from 'expo-router';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const SignUp = () => {
  <SafeAreaView className='bg-primary h-full'>
    <ScrollView>
      <View className='w-full justify-center px-4 my-6'>
        <Text className='color-secondary'>SignUp</Text>
        <View className='flex-row justify-center gap-2 pt-5'>
          <Text className='text-lg text-gray-100'>
            Already have an account?
          </Text>
          <Link
            className='color-secondary text-lg underline'
            href='/(auth)/sign-in'>
            Sign in
          </Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>;
};

export default SignUp;
