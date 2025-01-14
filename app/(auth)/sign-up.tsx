import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import {images} from '@/constants';
import {Link} from 'expo-router';
import {useCallback, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const SignUp = () => {
  const [isLoading, setSsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = useCallback((value: string, name: keyof typeof form) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    setSsLoading(true);
  }, []);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6'>
          <Link href='/'>
            <Image
              resizeMode='contain'
              source={images.logo}
              className='w-[115px] h-[35px]'
            />
          </Link>
          <Text className='text-2xl text-white mt-10 font-psemibold'>
            Log in to Aora
          </Text>
          <FormField
            title='Email'
            value={form.email}
            onChange={handleChange}
            keyboardType='email-address'
            styles='mt-7'
            name='email'
          />
          <FormField
            title='Password'
            value={form.password}
            onChange={handleChange}
            styles='mt-7'
            name='password'
          />
          <CustomButton
            title='Sign up'
            handlePress={() => {}}
            containerStyles='mt-10 w-full'
            isLoading={isLoading}
          />
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100'>
              Don`t have an account?
            </Text>
            <Link className='color-secondary text-lg underline' href='/sign-in'>
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
