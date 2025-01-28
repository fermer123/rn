import EmptyState from '@/components/EmptyState';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending/Trending';
import VideoCard from '@/components/VideoCard';
import {images} from '@/constants';
import {useGlobalContext} from '@/context/GlobalContextProvider';
import {getAllPosts, getLatestPosts} from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';
import {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Models} from 'react-native-appwrite';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const {data: posts} = useAppwrite(getAllPosts);
  const {data: latestPosts} = useAppwrite(getLatestPosts);
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefresh(true);
    //reftch video
    setRefresh(false);
  }, [refresh]);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item?.$id}
        renderItem={({item}) => <VideoCard videoItem={item} />}
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4 space-y-6'>
            <View className='flex justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  JSMastery
                </Text>
              </View>
              <Image
                source={images.logoSmall}
                className='mt-1.5'
                resizeMode='contain'
                style={{width: 58, height: 43}}
              />
            </View>

            <SearchInput
              onChange={setSearch}
              value={search}
              onPress={() => console.log('search,', search)}
              placeholder='Search for a video topic'
            />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-lg font-pregular text-gray-100 mb-3'>
                Latest Videos
              </Text>
              <Trending posts={latestPosts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos found for this profile'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
