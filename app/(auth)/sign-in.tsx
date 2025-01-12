import FormField from '@/components/FormField';
import {images} from '@/constants';
import {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (value: string, name: keyof typeof form) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log('form', form);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6'>
          <Image
            resizeMode='contain'
            source={images.logo}
            className='w-[115px] h-[35px]'
          />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
