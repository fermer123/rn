import {icons} from '@/constants';
import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {Models} from 'react-native-appwrite';

interface IProps {
  videoItem: Models.Document;
}

const VideoCard: FC<IProps> = ({videoItem}) => {
  console.log('video', videoItem);
  const {title, thumbnail, video, creator} = videoItem;
  return (
    <View className='flex-col items-center  px-4 mb-14'>
      <View className='flex-row gap-3 items-start  '>
        <View className='justify-center items-center flex-row flex-1'>
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
            style={{width: 5, height: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
