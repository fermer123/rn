import {images} from '@/constants';
import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from './CustomButton';
import {router} from 'expo-router';
interface IProps {
  title?: string;
  subtitle?: string;
}
const EmptyState: FC<IProps> = ({title, subtitle}) => {
  return (
    <View className='flex justify-center items-center px-4'>
      <Image
        style={{width: 270, height: 225}}
        source={images.empty}
        resizeMode='contain'
      />
      <Text className='font-pmedium text-sm text-gray-100'>{title}</Text>
      <Text className='text-xl font-psemibold text-white mt-2'>{subtitle}</Text>
      <CustomButton
        handlePress={() => router.push('/create')}
        title='Create video'
        containerStyles='mt-6 my-4 w-full'
      />
    </View>
  );
};

export default EmptyState;
