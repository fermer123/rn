import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import {images} from '@/constants';
import {createUser} from '@/lib/appwrite';
import {Link, router} from 'expo-router';
import {useCallback, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const SignUp = () => {
  const [isLoading, setSsLoading] = useState(false);
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = useCallback(
    (value: string, name: keyof typeof form) => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setForm],
  );

  const onSubmit = useCallback(async () => {
    setSsLoading(true);
    try {
      const res = await createUser(form);
      if (res) {
        router.push('/home');
      }
    } catch (error) {
      setSsLoading(false);
      throw new Error(error as string);
    }
    setSsLoading(false);
  }, [form]);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='flex gap-10 w-full justify-center px-4 my-6'>
          <Link href='/'>
            <Image
              resizeMode='contain'
              source={images.logo}
              className='w-[115px] h-[45px]'
            />
          </Link>
          <Text className='text-2xl text-white font-psemibold'>
            Sign up to Aora
          </Text>
          <FormField
            title='Username'
            value={form.userName}
            onChange={handleChange}
            keyboardType='username'
            name='userName'
          />
          <FormField
            title='Email'
            value={form.email}
            onChange={handleChange}
            keyboardType='email-address'
            name='email'
          />
          <FormField
            title='Password'
            value={form.password}
            onChange={handleChange}
            name='password'
          />
          <CustomButton
            title='Sign up'
            handlePress={onSubmit}
            containerStyles='w-full'
            isLoading={isLoading}
          />
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100'>
              Have an account already?
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
