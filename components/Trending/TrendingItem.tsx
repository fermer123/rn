import {FC, useState} from 'react';
import {Models} from 'react-native-appwrite';
import * as Animatable from 'react-native-animatable';
import {Image, Text, TouchableOpacity} from 'react-native';
import {icons} from '@/constants';
interface IProps {
  video: Models.Document;
  activeVideo: string | undefined;
}
const zoomIn: Animatable.CustomAnimation = {
  0: {
    scaleY: 0.9,
  },
  1: {
    scaleY: 1.1,
  },
};
const zoomOut = {
  0: {
    scaleY: 1.1,
  },
  1: {
    scaleY: 0.9,
  },
};

export const TrendingItem: FC<IProps> = ({video, activeVideo}) => {
  const [play, setPlay] = useState(false);
  console.log('video', video);
  return (
    <Animatable.View
      animation={activeVideo === video?.$id ? zoomIn : zoomOut}
      duration={500}>
      {play ? (
        <Text className='text-white'>Playing</Text>
      ) : (
        <TouchableOpacity
          className='relative items-center justify-center w-full mr-3 max-w-[100%]'
          activeOpacity={0.7}
          onPress={() => setPlay((prev) => !prev)}>
          <Image
            source={{uri: video?.thumbnail}}
            resizeMode='cover'
            className='w-[152px] h-[72px] rounded-lg overflow-hidden shadow-lg shadow-black-100 my-5'
          />
          <Image
            source={icons.play}
            className='absolute top-[30%]'
            style={{height: '50px', width: '50px'}}
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
