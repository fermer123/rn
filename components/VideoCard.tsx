import {icons} from '@/constants';
import {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Models} from 'react-native-appwrite';

interface IProps {
  videoItem: Models.Document;
}

const VideoCard: FC<IProps> = ({videoItem}) => {
  const {title, thumbnail, video, creator} = videoItem;
  const [play, setPlay] = useState(false);
  return (
    <View className='flex-col items-start  px-4 mb-14'>
      <View className='flex-row justify-between gap-3 w-full'>
        <View className='justify-center flex-1 items-center flex-row'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image
              className='w-full h-full rounded-lg'
              resizeMode='cover'
              source={{uri: creator?.avatar}}
            />
          </View>
          <View className='justify-center flex-1 gap-y-1 ml-3'>
            <Text
              className='justify-center font-psemibold text-sm text-white'
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              className='text-xs text-gray-100 font-pregular'
              numberOfLines={1}>
              {creator?.userName}
            </Text>
          </View>
        </View>
        <View className='pt-2'>
          <Image
            source={icons.menu}
            resizeMode='contain'
            style={{width: 15, height: 15}}
          />
        </View>
      </View>
      {play ? (
        <Text className='text-white'>Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay((prev) => !prev)}
          className='w-full h-[120px] rounded-xl mt-3 relative justify-center items-center'>
          <Image
            className='w-full h-full rounded-xl mt-3'
            resizeMode='cover'
            source={{uri: thumbnail}}
          />
          <Image
            source={icons.play}
            className='absolute top-[30%]'
            style={{height: '50px', width: '50px'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
